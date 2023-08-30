import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slider:any []=[];

  constructor(private sharedService:SharedService ){}
  
  getSlider(){
    this.sharedService.slider().subscribe((res:any)=>{
      this.slider = res.data.sliders;
      console.log(this.slider)
    })
   }
  
   ngOnInit(){
    this.getSlider();

   }
}
