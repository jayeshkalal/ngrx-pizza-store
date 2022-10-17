import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, first, take, tap } from 'rxjs/operators';
import { fetchPizzaOrdersList } from '../actions/pizza.actions';
import { selectIsFetchingNeeded } from '../selectors/pizza.selectors';

@Injectable({providedIn: 'root'})
export class PizzaResolve implements Resolve<any> {
  constructor(private store: Store) {
  }
  

  resolve(route: ActivatedRouteSnapshot) {
    return this.store.select(
      selectIsFetchingNeeded).pipe(take(1)).subscribe((data) => {
        if(data)
          this.store.dispatch(fetchPizzaOrdersList());
      });
  }
}
