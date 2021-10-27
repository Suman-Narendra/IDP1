import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  name:any='';

  dblogic(myname:any)
  {
    console.log("Hi, I am Suman Narendra"+myname)
    this.name=myname;
  }
  
}
