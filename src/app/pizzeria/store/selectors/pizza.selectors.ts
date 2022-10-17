import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as frompizzaOrders from '../reducers/index';
import * as fromPizzaOrdersList from '../reducers/pizza.reducer';

export const selectOrdersState = createFeatureSelector<frompizzaOrders.State>(
  frompizzaOrders.pizzaOrdersFeatureKey,
);

export const selectOrdersListState = createSelector(
  selectOrdersState,
  state => state[fromPizzaOrdersList.pizzaOrdersListFeatureKey],
);

export const {
  selectAll
} = fromPizzaOrdersList.adapter.getSelectors();

export const selectAllOrders = createSelector(
  selectOrdersListState,
  selectAll
);

export const selectIsFetching = undefined; // TODO: implement

export const selectIsFetchingNeeded = createSelector(
  selectOrdersListState,
  (state) => {
      return !state.hasFetched || state.hasError;
  }
);

export const selectNewOrders = createSelector(
  selectAllOrders,
  (data) => {
    return data.filter(_ => _.state == "New");
  }
);

export const selectInProgressOrders = createSelector(
  selectAllOrders,
  (data) => {
    return data.filter(_ => _.state == "In progress");
  }
); 

export const selectDoneOrders = createSelector(
  selectAllOrders,
  (data) => {
    return data.filter(_ => _.state == "Done");
  }
); 

export const selectTotalOfNewOrders = createSelector(
  selectNewOrders,
  (data) => {
    return data.length;
  }
); 

export const selectTotalOfInProgressOrders = createSelector(
  selectInProgressOrders,
  (data) => {
    return data.length;
  }
); 

export const selectTotalOfDoneOrders = createSelector(
  selectDoneOrders,
  (data) => {
    return data.length;
  }
); 
