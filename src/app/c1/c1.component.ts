import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private aaa:Service1Service) { }

  ngOnInit(): void {
  }


  c11(myname:any)
  {
    this.aaa.dblogic(myname);
    console.log("hiii from c1")
  }
}
