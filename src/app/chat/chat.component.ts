import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() {}
  ngOnInit(): void {}

  submitMessage(event: any) {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '11:00',
      me: true,
    });
    return true;
  }

  emojiClicked(event: { emoji: { native: string } }) {
    this.message += event.emoji.native;
  }
}
