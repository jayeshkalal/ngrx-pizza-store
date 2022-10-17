import { Inject, Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { FAKE_PIZZA_ORDERS } from './pizzeria.module';
import { Pizza } from './model/pizza';

export const loadingTime = 1000;

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  constructor() {
  }

  public fetchPizzas(): Observable<Pizza[]> {
    const pizzas : Pizza[] = [
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
      ];  
    return timer(loadingTime).pipe(
      mapTo(pizzas),
    );
  }  
}
