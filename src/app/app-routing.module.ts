import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authintiaction/auth/login/login.component';
import { RegisterComponent } from './Authintiaction/auth/register/register.component';
import { HomeComponent } from './questions/home/home.component';
import { SelectionComponent } from './questions/selection/selection.component';

const routes: Routes = [
  {path:"register" , component:RegisterComponent},
  {path:"login" , component:LoginComponent},
  {path:"**",  component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"selection",component:SelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
