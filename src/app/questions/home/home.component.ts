import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSelected = false;
  selectedDiv: any;

  onClickDiv() {
    this.isSelected = !this.isSelected;
  }
  selectDiv(item: any) {
    this.selectedDiv = item;
  }

  
arr = [
  {
    url :"/assets/images/ic_doctor.svg",
    id :"1" ,
    title : "الطب البشري"
  },
  {
    url :"/assets/images/ic_dentist.svg",
    id :"2" ,
    title : "طب الأسنان"
  },
  {
    url :"/assets/images/ic_pharmacy.svg",
    id :"3" ,
    title : "الصيدلة"
  },
  {
    url :"/assets/images/ic_nursing.svg",
    id :"4" ,
    title : "التمريض"
  },
  {
    url :"/assets/images/ic_It.svg",
    id :"5" ,
    title : "الهندسة المعلوماتية"
  },
  {
    url :"/assets/images/ic_architecture.svg",
    id :"6" ,
    title :" الهندسة المعمارية"
  }
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
