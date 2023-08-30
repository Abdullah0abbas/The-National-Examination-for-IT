import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuizDwratComponent } from './quiz-dwrat/quiz-dwrat.component';
import { SelectionComponent } from './selection/selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { DwratComponent } from './dwrat/dwrat.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { QuizEndComponent } from './quiz-end/quiz-end.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../Authintiaction/auth/auth.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HomeComponent,
    QuizDwratComponent,
    SelectionComponent,
    QuizComponent,
    DwratComponent,
    QuizStartComponent,
    QuizEndComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    RouterModule,
    RouterOutlet,
    AppRoutingModule,
    AuthModule
  ]
  ,exports:[
    HomeComponent,
    QuizDwratComponent,
    SelectionComponent,
    QuizComponent,
    DwratComponent,
    QuizStartComponent,
    QuizEndComponent,
    RouterModule,
    MatDialogModule
   
  ]
})
export class QuestionsModule { }
