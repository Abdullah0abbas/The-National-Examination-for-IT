import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
        username: new FormControl(null, Validators.required),
        phone : new FormControl(null,[Validators.required,Validators.pattern(/^09\d{8}$/)]),
        type : new FormControl(null,Validators.required),
     
    });
    
  }

 

  @ViewChild('myForm')
  form!: NgForm;

  onSubmitReactiveForm() {
    console.log(this.reactiveForm);


    this.form.reset();
  }
}
