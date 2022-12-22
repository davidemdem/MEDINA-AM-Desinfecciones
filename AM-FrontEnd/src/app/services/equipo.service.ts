import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url='/';

  constructor( private http:HttpClient )  {}
//obtener todo los servicios
  getServicio(){
    return this.http.get(this.url)
  }
   //obtener solo un servicio
  getUnServicio (id: string){
    return this.http.get(this.url+'/'+id)
  }
  //agregar un servicio
  addServicio(servicio:servicio){
    return this.http.post(this.url,servicio)
  }
  //eliminar servicio
  deleteServicio(id:string){
    return this.http.delete(this.url+'/'+id)
  }
  //editar servicio
  editServicio(id:string,servicio:servicio){
    return this.http.put(this.url+'/'+id,servicio)
  }

}
export interface servicio{
  id?:string,
  nombre?:string,
  descripcion?:string,
  precio?:string
}
