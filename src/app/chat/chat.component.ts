import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.serivice';
import { chat } from '../chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  message = '';
  // chatService: ChatService | undefined;
  chats: chat[] = [];

  constructor(private ChatService: ChatService) {}
  ngOnInit(): void {}

  submitMessage(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';
    if (value.length < 1) return false;
    this.conversation.messages.push({
      id: 1,
      body: value,
      time: '8:22',
      me: true,
    });
    this.pushChat(2, 3, value);

    return true;
  }
  pushChat(sender_id: any, receiver_id: any, message_content: string) {
    console.log(sender_id, receiver_id, message_content);
    this.ChatService.startChat(sender_id, receiver_id, message_content);
  }

  // emojiClicked(event: { emoji: { native: string } }) {
  //   this.message += event.emoji.native;
  // }
}
