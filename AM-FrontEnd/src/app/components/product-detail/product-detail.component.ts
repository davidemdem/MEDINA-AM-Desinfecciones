import { Component } from '@angular/core';
import { ProductsService, Servicio } from '../../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  Listar: Servicio[] | undefined;

  showSection = false;

  toggleShowSection() {
    this.showSection = !this.showSection;
    
    
  }
  
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


