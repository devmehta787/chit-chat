import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  startChat(chat: {
    sender_id: BigInteger;
    receiver_id: BigInteger;
    message_content: string;
  }) {
    this.http
      .post('https://localhost:8080/user/startChat', chat, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
