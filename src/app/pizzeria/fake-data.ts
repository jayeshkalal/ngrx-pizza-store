import { OrderState } from "./model/order-state.type";
import { Pizza } from "./model/pizza";
import { PizzaOrder } from "./model/pizza-order.model";

export const newOrders: PizzaOrder[] = [
  {
    
    orderNumber: '1',
    customerName: 'Aubrey Lawson',
    name: 'Neapolitan Pizza',
    toppings: '',
    extraToppings: false,
    state: 'New',
  },
  {
    orderNumber: '2',
    customerName: 'Bianca Mullins',
    name: 'Margherita',
    toppings: 'Extra Cheese',
    extraToppings: true,
    state: 'New',
  },
];

export const inProgressOrders: PizzaOrder[] = [
  {
    orderNumber: '3',
    customerName: 'Sandra Mitchell',
    name: 'Pepperoni',
    toppings: 'Mushrooms, Onions',
    extraToppings: true,
    state: 'In progress',
  },
];

export const doneOrders: PizzaOrder[] = [
  {
    orderNumber: '4',
    customerName: 'Paige Dixon',
    name: 'BBQ Chicken Pizza',
    toppings: '',
    extraToppings: false,
    state: 'Done',
  },
];

export const pizzas : Pizza[] = [
  {
    name : "Chunky Chicken",
    id : 1,
    toppings : "chicken..",
    imageSrc : "assets/images/chunky-chicken.png"
  },
  {
    name : "Dominator",
    id : 2,
    toppings : "..",
    imageSrc : "assets/images/Dominator.jpg"
  },{
    name : "Non-Veg Supreme",
    id : 3,
    toppings : "chicken",
    imageSrc : "assets/images/Non-Veg_Supreme.jpg"
  },{
    name : "Veggie Paradise",
    id : 4,
    toppings : "Veggies",
    imageSrc : "assets/images/Digital_Veggie_Paradise_olo_266x265.jpg"
  },
  {
    name : "Indian Tandoori Paneer",
    id : 5,
    toppings : "Paneer",
    imageSrc : "assets/images/IndianTandooriPaneer.jpg"
  },
  {
    name : "Peppy Paneer",
    id : 6,
    toppings : "Paneer",
    imageSrc : "assets/images/Peppy_Paneer.jpg"
  },
  {
    name : "Veggie",
    id : 7,
    toppings : "Veggies",
    imageSrc : "assets/images/Deluxe_Veggie.jpg"
  },
  {
    name : "Farmhouse",
    id : 8,
    toppings : "Veggies",
    imageSrc : "assets/images/Farmhouse.jpg"
  },
  {
    name : "Margherit",
    id : 9,
    toppings : "Cheese",
    imageSrc : "assets/images/Margherit.jpg"
  },
] 

export const allOrders: PizzaOrder[] = [
  ...newOrders,
  ...doneOrders,
  ...inProgressOrders,
];
