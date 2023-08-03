import { User } from './user.model';
import { chat } from './chat.model';
export interface UserChat {
  User: User;
  Chats: chat[];
}
