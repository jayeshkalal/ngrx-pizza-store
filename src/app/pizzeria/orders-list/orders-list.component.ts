import { Component, OnInit } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { statusChange } from '../store/actions/pizza.actions';
import { PizzaOrder } from '../model/pizza-order.model';
import { selectAllOrders, selectDoneOrders, selectInProgressOrders, selectNewOrders } from '../store/selectors/pizza.selectors';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  fetched : boolean = false;
  total: PizzaOrder[]=[];
  new: Observable<PizzaOrder[]> = of([]);
  inProg: Observable<PizzaOrder[]> = of([]);
  done: Observable<PizzaOrder[]> = of([]);
  constructor(private store: Store<EntityState<PizzaOrder>>) {
  }
  ngOnInit(): void {
    this.store.select(selectAllOrders).subscribe((_) => 
    {
      this.total = _;
      this.fetched = this.total.length ?  true : false;
    });
    this.new = this.store.select(selectNewOrders);
    this.inProg = this.store.select(selectInProgressOrders);
    this.done = this.store.select(selectDoneOrders);
  }
  public changeOrderStatus(order: PizzaOrder) {
    this.store.dispatch(statusChange({order: order}));
  }
}
