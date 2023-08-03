import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { map } from 'rxjs';
import { chat } from './chat.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  constructor(private http: HttpClient) {}

  startChat(sender_id: BigInt, receiver_id: BigInt, message_content: string) {
    const chat = {
      sender_id: sender_id,
      receiver_id: receiver_id,
      message_content: message_content,
    };
    return this.http
      .post('http://localhost:8080/user/startChat', chat, {
        withCredentials: false,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

  // getChats(sender_id: any) {
  //   return this.http.get(`http://localhost:8080/user/getChats/${sender_id}`);
  // }

  getChat(sender_id: any, receiver_id: any) {
    return this.http.get<chat[]>(
      `http://localhost:8080/user/getChat/${sender_id}/${receiver_id}`
    );
  }
}
