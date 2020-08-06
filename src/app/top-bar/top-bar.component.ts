import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from "../services/auth.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { }
Role:any


  ngOnInit() {
    this.Role= localStorage.getItem('Role')
    //this.Role=this.authService.currentUser.Role
  }
  logOut(){
    this.authService.logout()
   console.log("logging out")
    this.route.navigate(['/Login'])
    
  }

}
