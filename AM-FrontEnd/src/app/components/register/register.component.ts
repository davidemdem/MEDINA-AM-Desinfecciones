import { Component } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:string;
  password: string;
  passwordError:string;
  confirmPassword:string;

  constructor(public userService:UsersService, public router:Router) {}
  
  register() {
    const usuario= { email: this.email, password: this.password };
    this.userService.register(usuario).subscribe(data => {
      this.userService.setToken(data.token)
      this.router.navigateByUrl('/');
    },
    error=>{console.log(error)}
    )


}}
