import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  error: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  CheckLogin() {
    const User = document.getElementById('User') as HTMLInputElement | null;
    const Pass = document.getElementById('Pass') as HTMLInputElement | null;
    if (User?.value == 'Admin' && Pass?.value == 'ABE2023') {
      this.router.navigateByUrl('/Home');
    } else {
      this.error = true;
    }
  }
}
