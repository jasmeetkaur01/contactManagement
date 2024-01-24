import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  login: boolean = false;
  constructor(private auth: AuthService,
    private router: Router) { }
  ngOnInit(): void {
    this.checkLogin()
  }
  checkLogin() {
    if (sessionStorage.getItem("isLogin") == 'true') {
      this.login = true
    }
    else {
      this.login = false
    }
  }
  logout() {
    this.auth.remove()
    this.router.navigateByUrl('/login')
  }
}
