import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  getContact(friend_name: string) {
    return this.http.get<User>(
      `http://localhost:8080/user/getByName/${friend_name}`
    );
  }
  getContacts() {
    return this.http.get(`http://localhost:8080/user/getUsers`);
  }
}
