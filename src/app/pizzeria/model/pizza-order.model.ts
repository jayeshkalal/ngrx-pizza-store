import { OrderState } from './order-state.type';

export interface PizzaOrder {
  orderNumber: string;
  name: string;
  customerName: string;
  toppings: string;
  extraToppings: boolean;
  state: OrderState;
}
