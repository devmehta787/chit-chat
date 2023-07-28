import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  //     router.POST().route("/user/addFriend").with(FriendController::addFriend);
  //     router.GET().route("/user/getFriends/{userId}").with(FriendController::getFriends);
  //     router.DELETE().route("/user/deleteFriend/{friendId}").with(FriendController::deleteFriend);

  addFriend(friend: { userId: BigInteger; friendId: BigInteger }) {
    this.http
      .post('https://localhost:8080/user/addFriend', friend, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  getFriends(userId: { userId: BigInteger }) {
    this.http
      .get(`https://localhost:8080/user/getFriends/${userId.userId}`, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  deleteFriend(friendId: { friendId: BigInteger }) {
    this.http
      .delete(`https://localhost:8080/user/deleteFriend/${friendId.friendId}`, {
        withCredentials: false,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
