import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PizzeriaModule } from './pizzeria/pizzeria.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './meta-reducers';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PizzaOrder } from './pizzeria/model/pizza-order.model';
import { doneOrders, inProgressOrders, newOrders } from './pizzeria/fake-data';
import { statusChangeTime, ordersLoadingTime } from './pizzeria/orders-list.service';
import { PizzaEffects } from './pizzeria/store/effects/pizza.effects';
import * as fromPizzaOrders from './pizzeria/store/reducers';

describe('AppComponent', () => {
  const spinnerQuery = By.css('mat-spinner');
  const dashboardStatisticQuery = By.css('app-dashboard-statistic');
  const listColumnQuery = By.css('app-list-column');
  const getNewColumn = (debugElement: DebugElement) => debugElement.queryAll(listColumnQuery)[0];
  const getInProgressColumn = (debugElement: DebugElement) => debugElement.queryAll(listColumnQuery)[1];
  const getDoneColumn = (debugElement: DebugElement) => debugElement.queryAll(listColumnQuery)[2];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PizzeriaModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreModule.forFeature(
          fromPizzaOrders.pizzaOrdersFeatureKey,
          fromPizzaOrders.reducers,
        ),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([
          PizzaEffects,
        ]),
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  function prepareTest(startingRoute = 'car-repairs') {
    let router: Router;
    let fixture: ComponentFixture<AppComponent>;
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    fixture.detectChanges();
    router.initialNavigation();
    router.navigateByUrl(startingRoute);
    tick();

    return {
      fixture,
      router,
    };
  }

  describe('when starting from dashboard', () => {
    it('should only show a spinner until data is loaded', fakeAsync(() => {
      const {fixture} = prepareTest();

      fixture.detectChanges();
      expect(fixture.debugElement.query(spinnerQuery)).toBeDefined();
      expect(fixture.debugElement.queryAll(dashboardStatisticQuery).length).toEqual(0);

      tick(ordersLoadingTime);
      fixture.detectChanges();

      expect(fixture.debugElement.query(spinnerQuery)).toBeNull();
      expect(fixture.debugElement.queryAll(dashboardStatisticQuery).length).toEqual(3);
    }));

    it('should not reload data when going to list', fakeAsync(() => {
      const {fixture, router} = prepareTest();

      tick(ordersLoadingTime);
      fixture.detectChanges();

      router.navigateByUrl('car-repairs/list');
      tick();
      fixture.detectChanges();

      expect(fixture.debugElement.query(spinnerQuery)).toBeNull();
      expect(fixture.debugElement.queryAll(listColumnQuery).length).toEqual(3);
    }));

    it('should show correct stats', fakeAsync(() => {
      const {fixture} = prepareTest();

      tick(ordersLoadingTime);
      fixture.detectChanges();

      const dashboardStatistics = fixture.debugElement.queryAll(dashboardStatisticQuery);

      const getStatisticValue = (statistic: DebugElement) =>
        statistic.query(By.css('.container h2')).nativeElement.innerText;

      expect(getStatisticValue(dashboardStatistics[0])).toEqual('2');
      expect(getStatisticValue(dashboardStatistics[1])).toEqual('1');
      expect(getStatisticValue(dashboardStatistics[2])).toEqual('1');
    }));
  });

  describe('when starting from kanban board', () => {
    const getText = (repair: DebugElement, selector: string) =>
      repair.query(By.css(selector)).nativeElement.innerText;

    const assertRepairIsDisplayedCorrectly = (repair: DebugElement, expectedRepair: PizzaOrder) => {
      expect(getText(repair, 'mat-card-title')).toEqual(expectedRepair.state);
      expect(getText(repair, 'mat-card-subtitle')).toEqual(expectedRepair.customerName);

      if (expectedRepair.state !== 'Done') {
        expect(repair.query(By.css('button'))).toBeDefined();
      }
    };

    const getRepairs = (column: DebugElement) => column.queryAll(By.css('mat-card'));

    const advanceRepair = (repair: DebugElement) => {
      repair.query(By.css('button')).triggerEventHandler('click', null);
    };

    it('should only show a spinner until data is loaded', fakeAsync(() => {
      const {fixture} = prepareTest('car-repairs/list');

      fixture.detectChanges();
      expect(fixture.debugElement.query(spinnerQuery)).toBeDefined();
      expect(fixture.debugElement.queryAll(listColumnQuery).length).toEqual(0);

      tick(ordersLoadingTime);
      fixture.detectChanges();

      expect(fixture.debugElement.query(spinnerQuery)).toBeNull();
      expect(fixture.debugElement.queryAll(listColumnQuery).length).toEqual(3);
    }));

    it('should not reload data when going to dashboard', fakeAsync(() => {
      const {fixture, router} = prepareTest('car-repairs/list');

      tick(ordersLoadingTime);
      fixture.detectChanges();

      router.navigateByUrl('car-repairs');
      tick();
      fixture.detectChanges();

      expect(fixture.debugElement.query(spinnerQuery)).toBeNull();
      expect(fixture.debugElement.queryAll(dashboardStatisticQuery).length).toEqual(3);
    }));

    it('should show new repairs', fakeAsync(() => {
      const {fixture} = prepareTest('car-repairs/list');

      tick(ordersLoadingTime);
      fixture.detectChanges();

      const column = getNewColumn(fixture.debugElement);
      const repairs = getRepairs(column);

      newOrders.forEach((repairModel, index) =>
        assertRepairIsDisplayedCorrectly(repairs[index], repairModel));
    }));

    it('should show ongoing repairs', fakeAsync(() => {
      const {fixture} = prepareTest('car-repairs/list');

      tick(ordersLoadingTime);
      fixture.detectChanges();

      const column = getInProgressColumn(fixture.debugElement);
      const repairs = getRepairs(column);

      inProgressOrders.forEach((repairModel, index) =>
        assertRepairIsDisplayedCorrectly(repairs[index], repairModel));
    }));

    it('should show done repairs', fakeAsync(() => {
      const {fixture} = prepareTest('car-repairs/list');

      tick(ordersLoadingTime);
      fixture.detectChanges();

      const column = fixture.debugElement.queryAll(listColumnQuery)[2];
      const repairs = getRepairs(column);

      doneOrders.forEach((repairModel, index) =>
        assertRepairIsDisplayedCorrectly(repairs[index], repairModel));
    }));

    describe('when advancing new repairs', () => {
      it('should remove the repair from new column', fakeAsync(() => {
        const {fixture} = prepareTest('car-repairs/list');

        tick(ordersLoadingTime);
        fixture.detectChanges();

        const newColumn = getNewColumn(fixture.debugElement);
        const initialNewRepairs = getRepairs(newColumn);

        advanceRepair(initialNewRepairs[0]);
        tick(statusChangeTime);
        fixture.detectChanges();

        const newRepairsAfterAdvance = getRepairs(newColumn);
        expect(newRepairsAfterAdvance.length).toEqual(newOrders.length - 1);
      }));

      it('should add the repair to in progress column', fakeAsync(() => {
        const {fixture} = prepareTest('car-repairs/list');

        tick(ordersLoadingTime);
        fixture.detectChanges();

        const newColumn = getNewColumn(fixture.debugElement);
        const inProgressColumn = getInProgressColumn(fixture.debugElement)
        const newRepairs = getRepairs(newColumn);

        advanceRepair(newRepairs[0]);
        tick(statusChangeTime);
        fixture.detectChanges();

        const inProgressRepairsAfterAdvance = getRepairs(inProgressColumn);
        expect(inProgressRepairsAfterAdvance.length).toEqual(inProgressOrders.length + 1);
      }));
    });

    describe('when advancing in progress repairs', () => {
      it('should remove the repair from in progress column', fakeAsync(() => {
        const {fixture} = prepareTest('car-repairs/list');

        tick(ordersLoadingTime);
        fixture.detectChanges();

        const inProgressColumn = getInProgressColumn(fixture.debugElement);
        const initialInProgressRepairs = getRepairs(inProgressColumn);

        advanceRepair(initialInProgressRepairs[0]);
        tick(statusChangeTime);
        fixture.detectChanges();

        const inProgressRepairsAfterAdvance = getRepairs(inProgressColumn);
        expect(inProgressRepairsAfterAdvance.length).toEqual(inProgressOrders.length - 1);
      }));

      it('should add the repair to done column', fakeAsync(() => {
        const {fixture} = prepareTest('car-repairs/list');

        tick(ordersLoadingTime);
        fixture.detectChanges();

        const inProgressColumn = getInProgressColumn(fixture.debugElement);
        const doneColumn = getDoneColumn(fixture.debugElement)
        const inProgressRepairs = getRepairs(inProgressColumn);

        advanceRepair(inProgressRepairs[0]);
        tick(statusChangeTime);
        fixture.detectChanges();

        const doneRepairsAfterAdvance = getRepairs(doneColumn);
        expect(doneRepairsAfterAdvance.length).toEqual(doneOrders.length + 1);
      }));
    });
  });
});
