import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.serivice';
import { chat } from '../chat.model';
import { User } from '../user.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;

  // chatService: ChatService | undefined;
  chats: chat[] = [];
  userData: any = localStorage.getItem('user');
  constructor(private ChatService: ChatService) {}
  ngOnInit(): void {
    this.fetchChat();
  }
  fetchChat() {
    // this.ChatService.getChat().pipe()
    this.ChatService.getChat(
      this.userData.substring(6, 7),
      this.conversation.id
    ).subscribe((data) => {
      console.log(data);
      // this.chatsEvent.emit(data);
      // console.log(typeof data.message_content);
      this.chats = data;
      console.log('test', typeof this.chats);
      console.log(this.chats);
    });
  }

  sender_id = this.userData.substring(6, 7);
  // this.ChatService.getChat(sender_id, this.conversation.id).subscribe(
  //   (data) => {
  //     console.log(data);
  //     this.chats.push(data);
  //   }
  // );
  // this.getMessage();

  getChat() {
    this.ChatService.getChat(this.sender_id, this.conversation.id).subscribe(
      (data) => {
        // console.log(data);
        this.chats = data;
        console.log(this.chats);
      }
    );
  }
  // getMessage() {
  //   for (const t of this.chats) {
  //     console.log('abc');
  //     console.log(t.message_content);
  //   }
  // }
  submitMessage(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';
    if (value.length < 1) return false;
    this.chats.push({
      sender_id: this.userData.substring(6, 7),
      receiver_id: this.conversation.id,
      message_content: value,
    });
    this.pushChat(this.userData.substring(6, 7), this.conversation.id, value);
    return true;
  }
  pushChat(sender_id: any, receiver_id: any, message_content: string) {
    console.log(sender_id, receiver_id, message_content);
    this.ChatService.startChat(sender_id, receiver_id, message_content);
    this.fetchChat();
  }

  // emojiClicked(event: { emoji: { native: string } }) {
  //   this.message += event.emoji.native;
  // }
}
