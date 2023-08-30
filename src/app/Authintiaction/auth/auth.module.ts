import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: "", component: LoginComponent },

  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },

];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    FormsModule,
  ]
})
export class AuthModule { }
