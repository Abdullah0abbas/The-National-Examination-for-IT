import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuizDwratComponent } from './quiz-dwrat/quiz-dwrat.component';
import { SelectionComponent } from './selection/selection.component';
import { QuizComponent } from './quiz/quiz.component';



@NgModule({
  declarations: [
    HomeComponent,
    QuizDwratComponent,
    SelectionComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
  ]
  ,exports:[
    HomeComponent,
    QuizDwratComponent,
    SelectionComponent,
    QuizComponent
  ]
})
export class QuestionsModule { }
