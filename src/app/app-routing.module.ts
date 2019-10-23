import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'game', component: GameComponent },
  { path: 'join', component: JoinComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'score', component: ScoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
