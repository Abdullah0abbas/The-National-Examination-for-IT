import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
    selector: 'app-quiz-start',
    templateUrl: './quiz-start.component.html',
    styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {

    questions: any[] = [];

    constructor(private questionsService: QuestionsService) { }

    getAllQuestions() {
        this.questionsService.getAllQuestions().subscribe((res: any) => {
            this.questions = res.data.questions;
           console.log(this.questions)
        })
    }

    // getAllAnswers() {
    //     this.questionsService.getAllAnswers().subscribe((res: any) => {
    //         this.answers = res.data.answers
    //         console.log(this.answers)
    //     })
    // }
    ngOnInit(): void {
        this.getAllQuestions()
        // this.getAllAnswers();
    }

}




