import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  user: User = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    phone: '',
  };
  constructor() {}
  setUsers(userData: User) {
    this.user = userData;
  }
  clearUsers() {
    this.user = {
      username: '',
      password: '',
      fullname: '',
      email: '',
      phone: '',
    };
  }
}
