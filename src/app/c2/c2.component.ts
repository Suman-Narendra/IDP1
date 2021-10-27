import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private bbb:Service1Service) { }

  ngOnInit(): void {
  }
  sername='';
  c12()
  {
    console.log("hii from c2")
    this.sername=this.bbb.name;
  }
}
