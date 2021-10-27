import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  title='Simple Interest Calculation';
  principle:any;
  rateOfIntrest:any;
  month:any;
  rate:any;
  b:any;
  a:any;
  mydata="suman";

  select(myval1:any){

 

    console.log(this.rateOfIntrest)

     

      this.rateOfIntrest=myval1;

      console.log(this.rateOfIntrest)

   

  }



  cal(principle:any,month:any,rate:any){

    this.principle=principle;

    this.month=month;

    this.rate=rate;

    this.a=this.principle*this.month*this.rate;

    this.b =Number(this.a/100);
    
    console.log(this.b)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
