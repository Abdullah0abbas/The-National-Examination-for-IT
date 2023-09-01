import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  items :any[]=[];

  constructor(private questionsService : QuestionsService){ }

  geAllSpecialization(){
    this.questionsService.geAllSpecialization().subscribe((res:any)=>{
      this.items = res.data.specialization;
      console.log(this.items)
    })
    
  }





  currentIndex = 0;
  images: string[] = [
    '/assets/images/slider1.png',
    '/assets/images/slider2.png',
    '/assets/images/slider3.jpg'
  ];
  currentSlide!: string;

  ngOnInit() {
    this.changeSlide();
    setInterval(() => this.nextSlide(), 3000);

    this.geAllSpecialization();
  }

  changeSlide() {
    this.currentSlide = this.images[this.currentIndex];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.changeSlide();
  }

  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.changeSlide();
  }
}
