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

  getChats(chat: { sender_id: BigInteger }) {
    this.http
      .get(`https://localhost:8080/user/getChats/${chat.sender_id}`, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  getChat(chat: { sender_id: BigInteger; receiver_id: BigInteger }) {
    this.http
      .get(
        `https://localhost:8080/user/getChat/${chat.sender_id}/${chat.receiver_id}`,
        {
          withCredentials: false,
        }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
