import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { ChatService } from '../chat.serivice';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText!: string;

  conversations: User[] = [];
  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.username
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.phone.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }
  // contactList: any = {};

  constructor(
    private http: HttpClient,
    private ChatService: ChatService,
    private UserService: UserService
  ) {}
  // this.UserService.getContacts().subscribe((data) => {
  //   this.contactList = data;
  // });

  ngOnInit(): void {}
  submitUser(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';
    this.getUser(value);
    if (value.length < 1) return false;
    return true;
  }
  getUser(username: string) {
    this.UserService.getContact(username).subscribe((data) => {
      console.log(data);
      this.conversations.push(data);
      // this.contactList = data;
    });
  }
}
// console.log(contactList: any);
// conversations = [
//   {
//     name: 'Dev',
//     time: '8:21',
//     latestMessage: 'Hi there!!',
//     latestMessageRead: false,
//     messages: [
//       { body: 'Hey world', time: '8:21', me: true },
//       { body: 'How are you?', time: '8:21', me: false },
//       { body: 'I am fine thanks', time: '8:21', me: true },
//       { body: 'Good talking to you!!!!', time: '8:21', me: false },
//     ],
//   },
//   // {
//   name: 'Abc',
//   time: '8:21',
//   latestMessage: 'wow',
//   latestMessageRead: true,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 6, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'noice', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Pqr',
//   time: '8:21',
//   latestMessage: 'I am fine',
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hiiiii', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine', time: '8:21', me: true },
//     { id: 4, body: 'Great', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Xyz',
//   time: '8:21',
//   latestMessage: 'lol',
//   latestMessageRead: true,
//   messages: [
//     { id: 1, body: 'Hola world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Qrs',
//   time: '8:21',
//   latestMessage: 'Alright',
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'QRST',
//   time: '8:21',
//   latestMessage: "Let's go",
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Tom',
//   time: '8:21',
//   latestMessage: 'I see',
//   latestMessageRead: true,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Ram',
//   time: '8:21',
//   latestMessage: 'OMG',
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Dave',
//   time: '8:21',
//   latestMessage: 'Oh No',
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Aman',
//   time: '8:21',
//   latestMessage: 'Thanks',
//   latestMessageRead: true,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Fwe',
//   time: '8:21',
//   latestMessage: 'Take care',
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'King',
//   time: '8:21',
//   latestMessage: 'I am coming now',
//   latestMessageRead: false,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Bleh',
//   time: '8:21',
//   latestMessage: 'Good Morning!',
//   latestMessageRead: true,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// {
//   name: 'Rock',
//   time: '8:21',
//   latestMessage: 'Good Morning!',
//   latestMessageRead: true,
//   messages: [
//     { id: 1, body: 'Hello world', time: '8:21', me: true },
//     { id: 2, body: 'How are you?', time: '8:21', me: false },
//     { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
//     { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
//   ],
// },
// ];
// }
