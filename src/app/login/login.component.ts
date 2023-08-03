import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private http: HttpClient) {
    console.log('login component loaded');
  }

  onLogin = () => {
    const loginData = { username: this.username, password: this.password };
    console.log(loginData);
    this.http
      .post<any>('http://localhost:8080/user/login', loginData)
      .subscribe(
        (response) => {
          console.log(response);

          localStorage.setItem('user', JSON.stringify(response));
          window.location.reload();
        },
        (error) => {
          console.error('Login failed:', error);
        }
      );
  };
}

// loginForm = new FormGroup({
//   username: new FormControl('', [Validators.required]),
//   password: new FormControl('', [Validators.required]),
// });
// get username() {
//   return this.loginForm.get('username');
// }
// get password() {
//   return this.loginForm.get('password');
// }
// }
