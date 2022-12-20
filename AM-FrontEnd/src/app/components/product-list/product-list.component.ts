import { Component } from '@angular/core';


interface servicesInterface{
  id: number,
  nombre:string,
  descripcion:string,
  precio:number
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public title:string ="Servicios que ofrecemos";
  public number:number =0;
  
  public products:servicesInterface[]=[
    {
      id: 1,
      nombre: "desinfeccion en domicilio",
      descripcion: "...",
      precio: 4000
  },
  {
      id: 2,
      nombre: "desinfeccion en local",
      descripcion: "...",
      precio: 2500
  },
  {
      id: 3,
      nombre: "desratizacion en domicilio",
      descripcion: "...",
      precio: 3000
  },
  {
      id: 4,
      nombre: "desinfeccion en local",
      descripcion: "...",
      precio: 2000
  },
  {
      id: 5,
      nombre: "limpieza de tanques y cisternas",
      descripcion: "...",
      precio: 6000
  }
  ]

}
