import { Component, OnInit } from '@angular/core';
import { ProductsService,Servicio} from '../../service/products.service'
import { Router} from '@angular/router';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  seervicio:Servicio={
    "id":'',
    "nombre":'',
    "descripcion":'',
    "precio": 300
    
  };
  Listar: Servicio[] | undefined;

  constructor(public ProductsService:ProductsService,
    private router:Router) {}

  ngOnInit():void{}

  listar() {
    this.ProductsService.getServicios().subscribe(
      res =>{console.log(res)
        this.Listar=<any>res;
      },
      err =>console.log(err)
    )  
  }

  agregar(){
    delete this.seervicio.id;
    this.ProductsService.addServicio(this.seervicio).subscribe();
    console.log("funciono")
    this.router.navigate(['/productList'])
  }
}
