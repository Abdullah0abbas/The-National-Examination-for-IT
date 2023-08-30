import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authintiaction/auth/login/login.component';
import { RegisterComponent } from './Authintiaction/auth/register/register.component';
import { DwratComponent } from './questions/dwrat/dwrat.component';
import { HomeComponent } from './questions/home/home.component';
import { QuizDwratComponent } from './questions/quiz-dwrat/quiz-dwrat.component';
import { QuizEndComponent } from './questions/quiz-end/quiz-end.component';
import { QuizStartComponent } from './questions/quiz-start/quiz-start.component';
import { QuizComponent } from './questions/quiz/quiz.component';
import { SelectionComponent } from './questions/selection/selection.component';

const routes: Routes = [
  {

    path: 'auth',
    loadChildren: () => import('./Authintiaction/auth/auth.module').then(m => m.AuthModule),
  },

  { path: "home", component: HomeComponent },
  { path: "selection", component: SelectionComponent },
  { path: "quiz", component: QuizComponent },
  { path: "dwrat", component: DwratComponent },
  { path: "quiz-dwrat", component: QuizDwratComponent },
  { path: "quiz-start", component: QuizStartComponent },
  { path: "quiz-end", component: QuizEndComponent },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
