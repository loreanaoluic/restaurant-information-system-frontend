import { Injectable } from '@angular/core';

const SockJs: any = require('sockjs-client');
const Stomp: any = require('stompjs');

@Injectable()
export class WebSocketService {
  // Open connection with the back-end socket
  public connect() {
    const tok = localStorage.getItem('userToken');
    let stompClient;
    if (tok) {
      const socket = new SockJs(`http://localhost:8081/socket`);
      stompClient = Stomp.over(socket);
    }
    return stompClient;
  }
}
