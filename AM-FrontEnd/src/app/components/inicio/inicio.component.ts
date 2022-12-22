import { Component, OnInit } from '@angular/core';
import {EquipoService, servicio} from '../../services/equipo.service'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable
  Listar: servicio[] = [];
  
  constructor(private equiposervice:EquipoService) {}
  ngOnInit(): void {
    this.listar()
  }
listar(){
  this.equiposervice.getServicio().subscribe(
    
    res=>{
      console.log(res);
      this.listar=<any>res;
    },
    err =>console.log(err)
    ) 
  }
  
  eliminar(id:string){
    this.equiposervice.deleteServicio(id).subscribe(

      res=>{
        console.log('equipo')
      }
      )
    }
  }

    

