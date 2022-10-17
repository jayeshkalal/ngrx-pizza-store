import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingDashboardComponent } from './pizzeria/landing-dashboard/landing-dashboard.component';
import { OrdersListComponent } from './pizzeria/orders-list/orders-list.component';
import { PizzaResolve } from './pizzeria/store/resolvers/pizza.resolve';

export const routes: Routes = [
  {
    path: 'landing',
    component: LandingDashboardComponent,
    resolve: {pizza: PizzaResolve},
  },
  {
    path: 'landing/list',
    component: OrdersListComponent,
    resolve: {pizza: PizzaResolve},
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
