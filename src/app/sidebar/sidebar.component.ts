import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    { name: 'Abc Def', time: '3:00 PM', message: 'Hello' },
    { name: 'xyz Def', time: '3:00 PM', message: 'Hello' },
    { name: 'abc Def', time: '3:00 PM', message: 'Hello' },
    { name: 'Abc Def', time: '3:00 PM', message: 'Hello' },
    { name: 'xyz Def', time: '3:00 PM', message: 'Hello' },
    { name: 'abc Def', time: '3:00 PM', message: 'Hello' },
    { name: 'Abc Def', time: '3:00 PM', message: 'Hello' },
  ];
}
