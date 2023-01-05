import { Component } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  email:string;
  password:string;
  
  constructor(public userService:UsersService, public router:Router) {}

  login() {
    const usuario ={email:this.email ,password:this.password};
    this.userService.login(usuario).subscribe(data =>{
      this.userService.setToken(data.token)
      this.router.navigateByUrl('/');
    },
    error=>{console.log(error)}
    )
    
    }
}
