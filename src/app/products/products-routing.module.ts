import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicPagesComponent} from "./pages/basic-pages/basic-pages.component";
import {NumbersPagesComponent} from "./pages/numbers-pages/numbers-pages.component";
import {CommonPagesComponent} from "./pages/common-pages/common-pages.component";
import {OrderPagesComponent} from "./pages/order-pages/order-pages.component";

const routes: Routes = [
  {
   path:'',
   component: BasicPagesComponent
  },
  {
    path:'numbers',
    component: NumbersPagesComponent

  },
  {
    path:'common',
    component: CommonPagesComponent
  },
  {
    path:'custom',
    component: OrderPagesComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
