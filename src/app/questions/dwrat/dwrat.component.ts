import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-dwrat',
  templateUrl: './dwrat.component.html',
  styleUrls: ['./dwrat.component.css']
})
export class DwratComponent {
  // dwrat = [
  //   {id:"1",name:"2023 دورة تشرين"},
  //   {id:"2",name:"2023 دورة تشرين"},
  //   {id:"3",name:"2023 دورة تشرين"},
  //   {id:"4",name:"2023 دورة تشرين"},
  // ]
  dwrat: any[] = []
  constructor(private questionsService:QuestionsService){}

  getAllDwrat(){
    this.questionsService.getAllDwrat().subscribe((res)=>{
      this.dwrat = res.data.term
      console.log(this.dwrat)
    })
  }

  ngOnInit(){
    this.getAllDwrat();
  }
}
