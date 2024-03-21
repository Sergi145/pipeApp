import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { CommonPagesComponent } from './pages/common-pages/common-pages.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { OrderPagesComponent } from './pages/order-pages/order-pages.component';
import {ToggleCasePipe} from "./pipes/   toggle-case.pipe";


@NgModule({
  declarations: [
    BasicPagesComponent,
    NumbersPagesComponent,
    CommonPagesComponent,
    OrderPagesComponent,
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
