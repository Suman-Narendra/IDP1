import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myname:any;
 mypass:any;

  constructor() { }

  ngOnInit(): void {
  }
  nam:any
  login(a:any,b:any){
   this.nam=localStorage.getItem("Name");
   console.log(this.nam)
    this.myname=a;
    this.mypass=b;
    if(this.nam==this.myname){    
      alert("logged in")
    }
    else{
      alert("name is wrong")
    }
  }

  
}
