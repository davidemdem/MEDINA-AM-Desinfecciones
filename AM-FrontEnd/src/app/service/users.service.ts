import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://localhost:3000/admin/login'
  constructor(
    private http:HttpClient,
    private cookies:CookieService) { }

   login(usuario:any): Observable<any> {
    return this.http.post(this.url,usuario)
    
  


   }
   setUser(usuario) {
     return this.cookies.set('usuario',usuario)
     
  }
   


   register(usuario:any): Observable<any> {
    return this.http.post(this.url,usuario)
   }
   

  
}
