import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    this.http.post('https://reqres.in/api/login', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        alert('Login successful!');
        this.router.navigate(['/home']);
      }, (error) => {
        alert('Login failed. Incorrect email or password.');
      });
  }

}

