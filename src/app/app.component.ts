import { Component, OnInit } from '@angular/core';
// import {dict} from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chit-chat';

  conversation: any;

  onConversationSelected(conversation: any) {
    this.conversation = conversation;
  }
}
