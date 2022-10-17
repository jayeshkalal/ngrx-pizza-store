import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { State } from 'src/app/meta-reducers';
import { OrdersListService } from '../../orders-list.service';
import * as pizzaActions from '../actions/pizza.actions';

@Injectable()
export class PizzaEffects {
  public fetchPizzaOrdersList = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzaActions.fetchPizzaOrdersList),
      switchMap(() => this.ordersListService.fetchPizzaOrders().pipe(
        map((_) => 
        pizzaActions.fetchPizzaOrdersListSuccess({orders : _}),
        catchError((err) => of(pizzaActions.fetchPizzaOrdersFail()))
        )
      ))
    ),
  );

  public statusChange = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzaActions.statusChange),
      switchMap((data) => this.ordersListService.changeOrderStatus(data.order).pipe(
        map((_) => 
        pizzaActions.statusChangeSuccess({order : _}),
        catchError((err) => of(pizzaActions.statusChangeFail()))
        )
      ))
    ),
  );

  public placeNewOrder = createEffect(() =>
    this.actions$.pipe(
      ofType(pizzaActions.placeNewOrder),
      switchMap((data) => this.ordersListService.placeNewOrder(data.order).pipe(
        map((_) => 
        pizzaActions.placeNewOrderSuccess({order : _}),
        catchError((err) => of(pizzaActions.placeNewOrderFail()))
        )
      ))
    ),
  );

  constructor(
    private actions$: Actions,
    private ordersListService: OrdersListService,
  ) {
  }
}
