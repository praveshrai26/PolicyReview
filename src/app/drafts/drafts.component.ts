import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

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
      
  }

}
