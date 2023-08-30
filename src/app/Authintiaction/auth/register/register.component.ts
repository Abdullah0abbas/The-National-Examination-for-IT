import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  reactiveForm!: FormGroup;

  collages: any[] = [];
  
  constructor(private authService: AuthServiceService,private router:Router) { }

  ngOnInit() {
    this.getAllColleges()
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^09\d{8}$/)]),
      type: new FormControl(null, Validators.required),

    });

  }


  getAllColleges() {
    this.authService.getAllColleges().subscribe((res: any) => {
      this.collages = res.data.colleges;
      
    })
  }


  onSubmitReactiveForm() {
    console.log(this.reactiveForm.value);
    const formData = new FormData();
    formData.append('name', this.reactiveForm.value.username)
    formData.append('phone', this.reactiveForm.value.phone)
    formData.append('collage_id', this.reactiveForm.value.type)
    this.authService.register(formData).subscribe((res:any) => {
      console.log(res)
      this.reactiveForm.reset();
      this.router.navigate(["/login"])
    })
  }


}
