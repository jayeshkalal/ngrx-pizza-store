import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as frompizzaOrdersList from './pizza.reducer';

export const pizzaOrdersFeatureKey = 'pizzaOrders';

export interface State {
  [frompizzaOrdersList.pizzaOrdersListFeatureKey]: frompizzaOrdersList.State;
}

export const reducers: ActionReducerMap<State> = {
  [frompizzaOrdersList.pizzaOrdersListFeatureKey]: frompizzaOrdersList.reducer,
};
