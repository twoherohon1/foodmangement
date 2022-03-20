import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppetizerComponent } from './pages/employee/appetizer/appetizer.component';
import { DrinkComponent } from './pages/employee/drink/drink.component';
import { FoodComponent } from './pages/employee/food/food.component';
import { NoodleComponent } from './pages/employee/noodle/noodle.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCartComponent } from './pages/main-cart/main-cart.component';
import { HistoryOrderComponent } from './pages/owner/history-order/history-order.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cart', component: MainCartComponent
  },
  {
    path: 'home/food', component: FoodComponent
  },
  {
    path: 'home/drink', component: DrinkComponent
  },
  {
    path: 'home/appetizer', component: AppetizerComponent
  },
  {
    path: 'home/noodle', component: NoodleComponent
  },
  {
    path: 'home/history/order', component: HistoryOrderComponent
  },
  // {
  //   path: 'home', component: HomeComponent, children: [
  //     {path: '', redirectTo: 'home', pathMatch: 'full'},
  //     {path: 'food', component: FoodComponent},
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
