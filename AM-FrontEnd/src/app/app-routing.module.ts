import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductsListComponent} from './components/products-list/products-list.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';


const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full' },
  
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'register',component:RegisterComponent,pathMatch:'full'},
  {path:'productList',component:ProductsListComponent,pathMatch:'full'},
  {path:'productList/:id',component:ProductDetailComponent},
  {path:'add',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
