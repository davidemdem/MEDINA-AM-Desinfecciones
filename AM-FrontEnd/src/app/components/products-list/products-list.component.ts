import { Component,OnInit } from '@angular/core';
import { ProductsService, Servicio } from '../../service/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  Listar: Servicio[] | undefined;
  
  
  constructor(private ProductsService:ProductsService,
    private Router:Router ) {} //CONSTR: recibe info fuera de la clase
    
  ngOnInit():void {
    this.listar()
  }


  listar() {
    this.ProductsService.getServicios().subscribe(
      res =>{console.log(res)
        this.Listar=<any>res;
      },
      err =>console.log(err)
    )  
  }

 eliminar(id:string){
  this.ProductsService.deleteServicio(id).subscribe(
    res=>{
      console.log('borrado');
      this.listar()
    },
    err=>console.log(err)
  )
 }
 modificar(id:string){
  this.Router.navigate(['/edit'+id])
 }


}
