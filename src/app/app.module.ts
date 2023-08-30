import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Authintiaction/auth/auth.module';

import { QuestionsModule } from './questions/questions.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    QuestionsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
