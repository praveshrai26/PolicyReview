import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import {DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-policy-verification',
  templateUrl: './policy-verification.component.html',
  styleUrls: ['./policy-verification.component.css']
})
export class PolicyVerificationComponent implements OnInit {

  constructor(private router:ActivatedRoute,private sanitizer:DomSanitizer ) { }
policyId:any
Action:any
color:any;
path:string;
  ngOnInit() {
    this.policyId=this.router.snapshot.params['id'];
    console.log(this.policyId)
    this.path="/assets/1.pdf"
  }
fun(){
return  this.sanitizer.bypassSecurityTrustResourceUrl(this.path);
}
}
