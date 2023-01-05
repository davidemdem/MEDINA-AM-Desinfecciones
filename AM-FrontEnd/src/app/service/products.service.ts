import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url='http://localhost:3000/listService'

  constructor(
    private http: HttpClient
  ) { }

  //get servicios
  getServicios(){
    return this.http.get(this.url)
  }
  // get un servicio 
  getUnServicio(id:string){
    return this.http.get(this.url+'/'+id);
  }
  //agregar servicio
  addServicio(servicio:Servicio){
    return this.http.post(this.url,servicio)
  }
  //eliminar
  deleteServicio(id:string){
    return this.http.delete(this.url+'/'+id)
  }
  //modificar 
  editServicio(id:string,nombre:Servicio,){
    return this.http.put(this.url+'/'+id,nombre)
  }
}
export interface Servicio{   //se utiliza cuando una clase tiene distintos tipos de datos
  id?:string,
  nombre?:string,
  descripcion?:string,       // el ? indica que no es opcional
  precio?:number
}