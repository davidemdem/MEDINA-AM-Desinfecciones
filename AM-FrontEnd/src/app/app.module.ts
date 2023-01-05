import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

import {ProductsService} from './service/products.service'

@NgModule({
  declarations: 
  [AppComponent,AddProductComponent,
  ProductDetailComponent,ProductsListComponent]
  ,
  imports: 
  [FormsModule,BrowserModule,AppRoutingModule,HttpClientModule]
    ,
    schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
