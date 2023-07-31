import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // user_id: User["id"];
  constructor(private http: HttpClient) {}

  addNewUser(user: {
    username: string;
    password: string;
    fullname: string;
    email: string;
    phone: string;
  }) {
    this.http
      .post('https://localhost:8080/user/new', user, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  userLogin(user: { username: string; password: string }) {
    this.http
      .post('https://localhost:8080/user/login', user, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
  userByName(userdelete: { username: string }) {
    console.log(userdelete);
    this.http
      .get(`https://localhost:8080/user/getByName/${userdelete.username}`)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
