import { createAction, props } from '@ngrx/store';
import { Pizza } from '../../model/pizza';
import { PizzaOrder } from '../../model/pizza-order.model';

export const fetchPizzasList = createAction(
  '[PizzaOrdersList] Get Pizza List',
);

export const fetchPizzasListSuccess = createAction(
  '[PizzaOrdersList] Fetch Pizza List Success',
  props<{ pizzas: Pizza[] }>(),
);

export const fetchPizzasFail = createAction(
  '[PizzaOrdersList] Fetch Pizza List Fail',
);

export const fetchPizzaOrdersList = createAction(
  '[PizzaOrdersList] Get Pizza order List',
);

export const fetchPizzaOrdersListSuccess = createAction(
  '[PizzaOrdersList] Fetch Pizza Orders List Success',
  props<{ orders: PizzaOrder[] }>(),
);

export const fetchPizzaOrdersFail = createAction(
  '[PizzaOrdersList] Fetch Pizza Orders List Fail',
);

export const statusChange = createAction(
  '[PizzaOrdersList] Status Change',
  props<{ order: PizzaOrder }>(),
);

export const statusChangeSuccess = createAction(
  '[PizzaOrdersList] Status Change Success',
  props<{ order: PizzaOrder }>(),
);

export const statusChangeFail = createAction(
  '[PizzaOrdersList] Status Change Fail',
);

export const placeNewOrder = createAction(
  '[PizzaOrdersList] new order',
  props<{ order: PizzaOrder }>(),
);

export const placeNewOrderSuccess = createAction(
  '[PizzaOrdersList] new order Success',
  props<{ order: PizzaOrder }>(),
);

export const placeNewOrderFail = createAction(
  '[PizzaOrdersList] new order Fail',
);
