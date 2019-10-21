import { Component, OnInit } from '@angular/core';
import { Result } from '../result'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  result: Result = {
     name: 'Windstorm',
     score: 60
  };

  constructor() { }

  ngOnInit() {
  }

}
