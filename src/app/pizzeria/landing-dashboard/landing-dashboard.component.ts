import { Component, OnInit } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Pizza } from '../model/pizza';
import { PizzaOrder } from '../model/pizza-order.model';
import { OrdersListService } from '../orders-list.service';
import { PizzaService } from '../pizza.service';
import { placeNewOrder } from '../store/actions/pizza.actions';
import { selectAllOrders, selectTotalOfDoneOrders, selectTotalOfInProgressOrders, selectTotalOfNewOrders } from '../store/selectors/pizza.selectors';

@Component({
  selector: 'landing-dashboard',
  templateUrl: './landing-dashboard.component.html',
  styleUrls: ['./landing-dashboard.component.css'],
})
export class LandingDashboardComponent implements OnInit{
  new: number = 0;
  inProg: number = 0;
  done: number = 0;
  fetched : boolean = false;
  orderNumber: number = 0;
  pizzaList: Pizza[] = [];
  constructor(
    private pizzaService : PizzaService, 
    private store: Store<EntityState<PizzaOrder>>) {

  }
  ngOnInit(): void {
    this.store.select(selectAllOrders).subscribe((_) => 
    {
      this.orderNumber = _.length;
      this.fetched = _.length ? true : false;
    });
    this.store.select(selectTotalOfNewOrders).subscribe((_) => 
    {
      this.new = _;
    });
    this.store.select(selectTotalOfInProgressOrders).subscribe((_) => 
    {
      this.inProg = _;
    });
    this.store.select(selectTotalOfDoneOrders).subscribe((_) => 
    {
      this.done = _;
    });
    this.getPizzaList();
  }

  getPizzaList(){
    this.pizzaService.fetchPizzas().subscribe((_) => {
      this.pizzaList = _;
    });
  }

  placeNewOrder(order: PizzaOrder){
    order.orderNumber = (this.orderNumber + 1).toString();
    this.store.dispatch(placeNewOrder({order: order}));
  }
}
