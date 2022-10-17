import { Inject, Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { PizzaOrder } from './model/pizza-order.model';
import { mapTo } from 'rxjs/operators';
import { FAKE_PIZZA_ORDERS } from './pizzeria.module';

export const ordersLoadingTime = 1000;
export const statusChangeTime = 200;

@Injectable({
  providedIn: 'root',
})
export class OrdersListService {
  constructor(@Inject(FAKE_PIZZA_ORDERS) private fakepizzaOrders: any[]) {
  }

  public fetchPizzaOrders(): Observable<PizzaOrder[]> {
    return timer(ordersLoadingTime).pipe(
      mapTo(this.fakepizzaOrders[0]),
    );
  }

  public changeOrderStatus(order: PizzaOrder): Observable<PizzaOrder> {
    return timer(statusChangeTime).pipe(
      mapTo({
        ...order,
        state: order.state === 'New' ? 'In progress' : 'Done',
      }),
    );
  }

  public placeNewOrder(order: PizzaOrder): Observable<PizzaOrder> {
    return timer(statusChangeTime).pipe(
      mapTo({
        ...order,
        state: 'New',
      }),
    );
  }
}
