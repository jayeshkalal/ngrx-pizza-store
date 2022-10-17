import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzaOrder } from '../model/pizza-order.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-column',
  templateUrl: './list-column.component.html',
  styleUrls: ['./list-column.component.css'],
})
export class ListColumnComponent {
  @Input() public name: string = '';
  @Input() public orders: Observable<PizzaOrder[]> = of([]);
  @Input() public canChangeStatus: boolean = false;
  @Output() public changeStatus: EventEmitter<PizzaOrder> = new EventEmitter<PizzaOrder>();

  public changeOrderStatus(order: PizzaOrder) {
    this.changeStatus.emit(order);
  }
}
