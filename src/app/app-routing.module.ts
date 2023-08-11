import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authintiaction/auth/login/login.component';
import { RegisterComponent } from './Authintiaction/auth/register/register.component';

const routes: Routes = [
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"**",  component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
