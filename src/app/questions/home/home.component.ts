import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  collages: any[] = [];
  constructor(private questionsService: QuestionsService) { }

  collage = JSON.parse(localStorage.getItem('collage-id') || '{}');


  getAllColleges() {
    this.questionsService.getAllColleges().subscribe((res: any) => {
      this.collages = res.data.colleges;
      console.log(this.collages)
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

    this.getAllColleges();
    console.log(localStorage.getItem("collage-id"))
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
