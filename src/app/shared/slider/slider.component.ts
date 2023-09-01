import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slider:any[]=[];

  constructor(private sharedService:SharedService ){}
  
  getSlider(){
    this.sharedService.slider().subscribe((res:any)=>{
      this.slider = res.data.sliders;
      console.log(this.slider)
    })
   }

   currentIndex = 0;
  //  images: string[] = [
  //    '/assets/images/slider1.png',
  //    '/assets/images/slider2.png',
  //    '/assets/images/slider3.jpg'
  //  ];
   currentSlide!: string;
 
   ngOnInit() {
     this.changeSlide();
     setInterval(() => this.nextSlide(), 3000);

     this.getSlider()
   }
 
   changeSlide() {
     this.currentSlide = this.slider[this.currentIndex];
   }
 
   nextSlide() {
     this.currentIndex = (this.currentIndex + 1) % this.slider.length;
     this.changeSlide();
   }
 
   previousSlide() {
     this.currentIndex =
       (this.currentIndex - 1 + this.slider.length) % this.slider.length;
     this.changeSlide();
   }
}
