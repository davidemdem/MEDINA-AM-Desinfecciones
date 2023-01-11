import { Component, OnInit} from '@angular/core';
import { UsersService} from 'src/app/service/users.service';
import { AuthServiceService} from 'src/app/service/auth-service.service';
import { Router } from '@angular/router' 
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email:string;
  password:string | any;
  
  constructor(public userService:UsersService,
    public http:HttpClient,
     public router:Router,
     public cookie:CookieService,
     public servLogin:AuthServiceService
    ) {}


    ngOnInit(): void {}

  login(miForm:NgForm) {
    const usuario ={email:miForm.value.email ,password:miForm.value.password}
    console.log(usuario)
    this.cookie.set('emailUsuario',usuario.email) 
    this.cookie.set('passwordUsuario',usuario.password)
    console.log(this.cookie.get('usuario'))
    console.log(this.cookie.get('password'))
    
    if ( this.servLogin.checkLogValues(usuario)){
      this.servLogin.isLoged= true 
      console.log(this.servLogin.isLoged)
    }
    
  }

  }

  
    
    

