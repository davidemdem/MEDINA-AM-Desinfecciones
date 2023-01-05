import { Component,OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(public userService:UsersService) {}
  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(usuario =>{
      console.log(usuario)
    })
  }


}
