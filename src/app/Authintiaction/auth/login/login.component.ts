import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^09\d{8}$/)]),
      type: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required)

    });

  }

  onSubmitReactiveForm() {
    console.log(this.reactiveForm);
  }
}
