import { Injectable } from '@angular/core';

var SockJs: any = require('sockjs-client');
var Stomp: any = require('stompjs');

@Injectable()
export class WebSocketService {
  // Open connection with the back-end socket
  public connect() {
    var tok = localStorage.getItem('userToken');
    let stompClient;
    console.log(tok);
    if (tok) {
      var currentUser = JSON.parse(tok);
      var token = currentUser.accessToken; // your token

      let socket = new SockJs(`http://localhost:8081/socket`);

      stompClient = Stomp.over(socket);
    }
    return stompClient;
  }
}
