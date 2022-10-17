import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PizzaOrder } from '../../model/pizza-order.model';
import * as pizzaActions from '../actions/pizza.actions';

export const pizzaOrdersListFeatureKey = 'pizzaOrdersList';

export interface State extends EntityState<PizzaOrder> {
  isFetching: boolean;
  hasError: boolean;
  hasFetched: boolean;
}

export const adapter: EntityAdapter<PizzaOrder> = createEntityAdapter<PizzaOrder>({
  selectId: (_) => _.orderNumber
});

export const initialState: State = adapter.getInitialState({
  isFetching: false,
  hasError: false,
  hasFetched: false,
});

export const reducer = createReducer(
  initialState,
  on(pizzaActions.fetchPizzaOrdersListSuccess, (state, orders) => adapter.addMany(orders.orders,
    { ...state, hasFetched: true, hasError: false })),

  on(pizzaActions.statusChangeSuccess, (state, action) => {
    return adapter.updateOne({ id: action.order.orderNumber, changes: action.order },
      { ...state, hasFetched: true, hasError: false })
  }),

  on(pizzaActions.placeNewOrderSuccess, (state, action) => {
    //action.order.orderNumber = state.entities => { return }
    return adapter.addOne(action.order,
      { ...state, hasFetched: true, hasError: false })
  }),

  on(pizzaActions.fetchPizzaOrdersFail, (state, action) => {
    return {
      ...state,
      hasError: true,
      hasFetched: false
    }
  }),
  on(pizzaActions.statusChangeFail, (state, action) => {
    return {
      ...state,
      hasError: true,
      hasFetched: false
    }
  })
);

