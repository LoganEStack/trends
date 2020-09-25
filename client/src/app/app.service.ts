import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* Importing from rxjs library starts*/
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
/* Importing from rxjs library ends*/

import * as io from 'socket.io-client';

export class AppService {
    private url = 'http://localhost:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }
    

    /* Const and variable for SocketEvent and HTTP call ends. */
    // constructor(private http: HttpClient) {}


  	/* Method to connect the users to socket */
  	connectSocket() {
  		this.socket = io(this.url);
  	}

    /* Method to create new room, create-room event.*/
    createNewRoom(): any {
      this.socket.emit('create-room', { 'createroom': 1 });
      const observable = new Observable(observer => {
        this.socket.on('new-room', (data) => {
          observer.next(
            data
          );
        });
        return () => {
          this.socket.disconnect();
        };
      });
      return observable;
    }
}
