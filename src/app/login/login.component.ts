import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,
    private auth: AuthService,
    private toastr: ToastrService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  submit() {
    console.log("Form Submitted");
    console.log(this.loginForm.value);
   
    if (
      this.loginForm.value.email == "admin@gmail.com" && this.loginForm.value.password == "567890") {
      this.router.navigateByUrl('/admin/admin-dashboard')
      this.auth.setData(this.loginForm.value.email)
      this.toastr.success("Welcome Admin", 'Login Successful')
    }
    else {
      this.toastr.error("Invalid Credentials", 'Try Again')
     }
  }
}
