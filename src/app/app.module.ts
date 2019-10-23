import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ScoreComponent } from './score/score.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    CreateComponent,
    JoinComponent,
    LobbyComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
