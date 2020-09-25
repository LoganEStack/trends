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
  ) {}

  ngOnInit() {
    // connect the player to the socket
		//this.appService.connectSocket();
  }

  createRoom() {
		this.appService.createNewRoom().subscribe( (response) => {
			this.roomNumber = response.roomNumber;
		});
	}

}
