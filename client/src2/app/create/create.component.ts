import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit() {
    // connect the player to the socket
		this.appService.connectSocket();
    console.log("Hello");
  }

}
