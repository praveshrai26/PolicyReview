import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { }
Role:any
  ngOnInit() {
  
    //this.Role=this.authService.currentUser.Role
   this.Role= localStorage.getItem('Role')
    console.log(this.Role)
  }

  

}
