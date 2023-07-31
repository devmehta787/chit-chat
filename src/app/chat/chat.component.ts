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
    event.target.value = '';
    if (value.length < 1) return false;
    this.conversation.messages.push({
      id: 1,
      body: value,
      time: '8:22',
      me: true,
    });
    return true;
  }

  // emojiClicked(event: { emoji: { native: string } }) {
  //   this.message += event.emoji.native;
  // }
}
