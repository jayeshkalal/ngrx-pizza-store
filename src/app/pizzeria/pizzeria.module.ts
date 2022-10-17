import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as frompizzaOrders from './store/reducers';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { LandingDashboardComponent } from './landing-dashboard/landing-dashboard.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { DashboardStatisticComponent } from './dashboard-statistic/dashboard-statistic.component';
import { MatIconModule } from '@angular/material/icon';
import { ListColumnComponent } from './list-column/list-column.component';
import { MatButtonModule } from '@angular/material/button';
import { allOrders, pizzas } from './fake-data';
import { PizzaEffects } from './store/effects/pizza.effects';
import { CardDisplayComponent } from './card-display/card-display.component';
import { OrdersListService } from './orders-list.service';
import { PizzaService } from './pizza.service';
import { FlexLayoutModule } from "@angular/flex-layout";

export const FAKE_PIZZA_ORDERS = new InjectionToken('Fake data');

@NgModule({
  declarations: [
    OrdersListComponent,
    LandingDashboardComponent,
    DashboardStatisticComponent,
    ListColumnComponent,
    CardDisplayComponent,
  ],
  exports: [
    LandingDashboardComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      frompizzaOrders.pizzaOrdersFeatureKey,
      frompizzaOrders.reducers,
    ),
    EffectsModule.forFeature([
      PizzaEffects,
    ]),
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: FAKE_PIZZA_ORDERS,
      useValue: [allOrders, pizzas],
    },
    PizzaService
  ],
})
export class PizzeriaModule {
}
