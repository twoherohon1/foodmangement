import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './pages/employee/food/food.component';
import { HomeComponent } from './pages/home/home.component';
import { MainCartComponent } from './pages/main-cart/main-cart.component';

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
