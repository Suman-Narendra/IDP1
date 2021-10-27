import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(private ccc:Service1Service) { }

  ngOnInit(): void {
  }
  c13(name:any)
  {
    console.log("this c3 is my name "+name)  
    this.ccc.dblogic(name);
    
  }
}
