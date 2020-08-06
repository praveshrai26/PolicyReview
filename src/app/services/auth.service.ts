import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: any;
  constructor() {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
   }

  login(credentials) { 
    console.log( JSON.stringify(credentials))
    /*return this.http.post('/api/authenticate', JSON.stringify(credentials))
     .map(response => {
       let result = response.json();
       
       if (result && result.token) {
         localStorage.setItem('token', result.token);
 
         let jwt = new JwtHelper();
         this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
 
         return true; 
       }
       else return false; 
     });*/
     localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiTmFtZSI6IlByYXZlc2ggUmFpIiwiUm9sZSI6IkFkbWluIn0.4KdeOvlXT6Ygx8tQANhgJA9sJaxTVxDKZK7OLLwMRnc');
     
     let jwt = new JwtHelper();
     this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

     return true;
   }
   logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
    return;
    
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

