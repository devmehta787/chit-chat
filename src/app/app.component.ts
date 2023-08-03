import { Component, OnInit } from '@angular/core';
// import {dict} from 'my-library';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.serivice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WebsocketService, ChatService],
})
export class AppComponent {
  // constructor(private chatService: ChatService) {
  //   chatService.startChat.subscribe((msg: any) => {
  //     console.log(msg);
  //   });
  // }
  islogin: boolean = false;
  constructor() {
    localStorage.getItem('user')
      ? (this.islogin = true)
      : (this.islogin = false);
  }
  title: string = 'chit-chat';

  conversation: any;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }
}
