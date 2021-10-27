import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register(a:string,b:any,c:any,d:any)
  {
      b=parseInt(b);
    localStorage.setItem("Name",a)
    localStorage.setItem("Phone_Number",b)
    localStorage.setItem("Email",c)
    localStorage.setItem("Password",d)
  } 
  rem(a:any,b:any,c:any,d:any){
    localStorage.removeItem('Name')
    localStorage.removeItem('Phone_Number')
    localStorage.removeItem('Email')
    localStorage.removeItem('Password')
  }


}
