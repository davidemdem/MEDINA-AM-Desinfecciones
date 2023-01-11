import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http'; 
import { LoginComponent } from '../components/login/login.component'; 

  

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 private exampleUser='exampleUser';
 private examplePassword='example';
    isLoged=false;



  constructor(private http:HttpClient, public usuario:LoginComponent
    ) { }

  checkLogValues(value:usuario):Boolean{
    if( this.usuario.email == this.exampleUser
       && this.usuario.password ==this.examplePassword){
        console.log(this.usuario)
        return true
       }else {  
        alert('please enter valid data');  
        return false
        }}
    
    
  
  
}

export class usuario {  
  email: string;  
  password: string}