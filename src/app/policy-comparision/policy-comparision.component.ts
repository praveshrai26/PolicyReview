import { Component, OnInit,Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-policy-comparision',
  templateUrl: './policy-comparision.component.html',
  styleUrls: ['./policy-comparision.component.css']
})
export class PolicyComparisionComponent implements OnInit {

  constructor() { }
  term:any;
  locked: any[] = [];
  Role:any;
  Name:any[]=[]

  
  ngOnInit() {
    this.Role=localStorage.getItem("Role")
    this.locked = [
      {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman'},
      {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run'},
      {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle'},
      {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee'}
  ]
  this.Name=[
    {ID: 1, User: 'Pravesh'},
    {ID: 2, User: 'Dylan'},
    {ID: 3, User: 'Vibhu'},
    {ID: 4, User: 'Shiwali'}
]
 
  }
  checkAllCheckBox(ev) {
		this.locked.forEach(x => x.checked = ev.target.checked)
	}

	isAllCheckBoxChecked() {
		return this.locked.every(p => p.checked);
	}
 fun(){
  
 var temp=[]
  this.locked.forEach(function(value){
    if(value.checked==true)
    {temp.push(value.ID)
      console.log(value.ID)}

     })
   
   return temp;
 }
 onAssign(name){

   console.log(name)
   console.log(this.fun())
     
}

}
