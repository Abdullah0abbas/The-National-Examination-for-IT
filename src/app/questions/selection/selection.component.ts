import { Component } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
type = [
  {"id":1,"name":"المترجمات"},
  {"id":1,"name":"داتا بيز"},
  {"id":1,"name":"قواعد المعطيات"},
  {"id":1,"name":"الاتومات"},
  {"id":1,"name":"الذكاء الاصطناعي"},
  {"id":1,"name":"الشبكات"},
  {"id":1,"name":"هندسة البرمجيات"},
  {"id":1,"name":"أمن المعلومات"},
  {"id":1,"name":"الخوارزميات"},
]




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
