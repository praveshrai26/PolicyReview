import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentsection',
  templateUrl: './commentsection.component.html',
  styleUrls: ['./commentsection.component.css']
})
export class CommentsectionComponent implements OnInit {
comments:any[]=[]
yourcomment:string
  constructor() { 
    this.comments=[{name:"Pravesh",comment:"hello"},
    {name:"Arun",comment:"hi"},
    {name:"Sharma",comment:"sup?"}]
  }

  ngOnInit() {
  }
  add(){
    this.comments.push({name:"me",comment:this.yourcomment})
    this.yourcomment=""

  }
 

}
