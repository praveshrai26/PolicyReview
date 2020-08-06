import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


//import { from } from 'rxjs';
//import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  id:any;
  pwd:any;
  login=false;
  Role:any;
  invalidLogin: boolean; 
  constructor(private route:Router,private authService : AuthService) { }
  
  
  onLogin(cred){
    console.log(cred)
  this.authService.login(cred)
    if(this.Role=="Admin")
    {
      localStorage.setItem('Role','Admin')
      this.route.navigate(['/Admin'])
    }
    else if(this.Role=="Reviewer")
    { localStorage.setItem('Role','Reviewer')
      this.route.navigate(['/Home'])
  }
  else if(this.Role=="Approver") {
    localStorage.setItem('Role','Approver')
    this.route.navigate(['/Home'])
  }
  else
  
  this.invalidLogin = true; 
}

}
