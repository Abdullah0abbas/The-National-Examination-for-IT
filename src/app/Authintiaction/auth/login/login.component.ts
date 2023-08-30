import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  reactiveForm!: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      key: new FormControl(null, Validators.required)

    });

  }

  onSubmitReactiveForm() {
    console.log(this.reactiveForm.value);
    const formData = new FormData();
    formData.append('name', this.reactiveForm.value.name)
    formData.append('code', this.reactiveForm.value.key)
    this.authService.login(formData).subscribe((res: any) => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      
      localStorage.setItem("collage-id",JSON.stringify(res.data.college.category.uuid))
      console.log(localStorage.getItem("collage-id"))

      this.reactiveForm.reset();
      this.router.navigate(['/home'])
    })


  }



}
