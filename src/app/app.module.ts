import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ChatComponent } from './chat/chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, ChatComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
