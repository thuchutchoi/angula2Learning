import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-dump-component',
  templateUrl: './dump-component.component.html',
  styleUrls: ['./dump-component.component.css']
})
export class DumpComponentComponent implements OnInit {
avatar:string;
printable:false;
index:number=1;
message=[];
contacts=[
  {
  id:1,
  name:"nghiant",
  job:"java dev",
  avatar:{
    url:"https://www.haynhat.com/wp-content/uploads/2015/02/dj-xinh-dep-va-goi-cam-2.jpg"
    }
  },
  {
    id:2,
    name:"tue",
    job:"worker",
    avatar:{
      url:"https://www.haynhat.com/wp-content/uploads/2015/02/dj-xinh-dep-va-goi-cam-4.jpg"
      }
  },
  {
    id:3,
    name:"my",
    job:"worker",
    //avatar:{
    //  url:"https://www.haynhat.com/wp-content/uploads/2013/12/hinh-anh-dep-elly-tran-khoe-nguc-khung-1.jpg"
    //  }
  }
];
  constructor() { }

  ngOnInit() {
    this.avatar="https://www.haynhat.com/wp-content/uploads/2015/02/dj-xinh-dep-va-goi-cam-2.jpg";
  }
  doClick(){
    this.avatar="https://www.haynhat.com/wp-content/uploads/2015/02/dj-xinh-dep-va-goi-cam-4.jpg";
    setTimeout(()=>{
      this.avatar="https://www.haynhat.com/wp-content/uploads/2013/12/hinh-anh-dep-elly-tran-khoe-nguc-khung-1.jpg";
    },2000);
  }
  change(index){
    this.index=index;
  }
  onInput(event){
    console.log(event.target.value);
    this.message.push(event.target.value);
  }
}
