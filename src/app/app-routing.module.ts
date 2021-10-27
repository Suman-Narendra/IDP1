import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { RegisterComponent } from './register/register.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path:'simple',
    component:SimpleComponent
  },
  {
    path:"login",
    component:LoginComponent      
  },
  {
    path:"register",
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
