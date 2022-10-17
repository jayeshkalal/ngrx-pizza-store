import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PizzaOrder } from '../model/pizza-order.model';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {
  @Input() public pizzas: Pizza[] = [];
  @Output() public newOrder: EventEmitter<PizzaOrder> = new EventEmitter<PizzaOrder>();
  constructor() { }

  ngOnInit(): void {
  }
  public placeOrder(pizza: Pizza) {
    const order: PizzaOrder = {
      orderNumber: "",
      customerName: "xyz",
      extraToppings : true,
      name : pizza.name,
      toppings : pizza.toppings,
      state : ""
    }
    this.newOrder.emit(order);
  }
}
