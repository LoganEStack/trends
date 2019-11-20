import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  private roomNumber = <Number> 0;

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit() {
    console.log("ngOnInit called");
    // connect the player to the socket
		//this.appService.connectSocket();
  }

  createRoom() {
    console.log('createRoom() called');
		this.appService.createNewRoom().subscribe( (response) => {
			this.roomNumber = response.roomNumber;
		});
	}

}
