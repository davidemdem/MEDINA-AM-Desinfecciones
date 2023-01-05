import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://localhost:3000/'
  constructor(
    private http:HttpClient,
    private cookies:CookieService) { }

   login(usuario:any): Observable<any> {
    return this.http.post(this.url,usuario)
   }
   register(usuario:any): Observable<any> {
    return this.http.post(this.url,usuario)
   }
   setToken(token:string){
    this.cookies.set("token",token);
   }
   getToken(){
    return this.cookies.get("token");
   }
   getUser(){
    return this.http.get(this.url);
   }
   getUserLogged(){
    const token= this.getToken();
   }

}
