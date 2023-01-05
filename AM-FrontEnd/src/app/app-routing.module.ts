import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductsListComponent} from './components/products-list/products-list.component'

const routes: Routes = [

  {path:'',redirectTo:'productList',pathMatch:'full'},
  {path:'productList',component:ProductsListComponent},
  {path:'productList/:id',component:ProductDetailComponent},
  {path:'add',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
