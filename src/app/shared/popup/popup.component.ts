import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{
  reactiveForm!: FormGroup;
  showWindow:boolean = true;
  constructor(private sharedService:SharedService){}
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^09\d{8}$/)]),

    });

  }

  close(){
    this.showWindow=false;
  }
  
  onSubmitReactiveForm() {
    console.log(this.reactiveForm.value);
    const formData = new FormData();
    formData.append('name', this.reactiveForm.value.name)
    formData.append('phone', this.reactiveForm.value.phone)
    this.sharedService.profile(formData).subscribe(res => {
      console.log(res)
      this.reactiveForm.reset();
    })
   
  }

  url: any; 
  msg = "";
  

  selectFile(event: any) { 
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    
    var mimeType = event.target.files[0].type;
    
    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result; 
    }
  }
}
