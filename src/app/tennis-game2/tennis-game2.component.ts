import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TennisGame } from '../TennisGame';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tennis-game2',
  templateUrl: './tennis-game2.component.html',
  styleUrls: ['./tennis-game2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TennisGame2Component implements OnInit, TennisGame {
  P1point = 0;
  P2point = 0;
  P1res = '';
  P2res = '';
  score: string = '';
  public tennisGameForm = new FormGroup({
    player1Score: new FormControl(0),
    player2Score: new FormControl(0)
  });
  public overallScore = '';

  constructor() { }

  ngOnInit() {
  }
  wonPoint(playerName: string): void {
  }
  onSubmit() {
    this.P1point = this.tennisGameForm.controls.player1Score.value;
    this.P2point = this.tennisGameForm.controls.player2Score.value;
    this.overallScore = this.getScore();
  }
  getScore(): string {
    this.score="";
    this.tablas();
    this.player1Adventage();
    this.player2Adventage();
    this.selectWinner();
    return this.score;
  }

  tablas(): string {
    if (this.P1point === this.P2point && this.P1point < 4) {
      if (this.P1point === 0)
        this.score = 'Love';
      if (this.P1point === 1)
        this.score = 'Fifteen';
      if (this.P1point === 2)
        this.score = 'Thirty';
      this.score += '-All';
    } 
    if (this.P1point === this.P2point && this.P1point >= 3) {
      this.score = 'Deuce';
    };
    return this.score;
  };
  //-----------------------------------------------------------
  //player 1 adventage
  player1Adventage(): string {
    //---------------------------
    //player 1 tiene ventaja y player 2 0 puntos
    if (this.P1point > 0 && this.P2point === 0) {
      if (this.P1point === 1)
        this.P1res = 'Fifteen';
      if (this.P1point === 2)
        this.P1res = 'Thirty';
      if (this.P1point === 3)
        this.P1res = 'Forty';

      this.P2res = 'Love';
      this.score = this.P1res + '-' + this.P2res;
    }
    //---------------------------
    //player 1 tiene ventaja a player 2
    if (this.P1point > this.P2point && this.P1point < 4) {
      if (this.P1point === 2)
        this.P1res = 'Thirty';
      if (this.P1point === 3)
        this.P1res = 'Forty';
      if (this.P2point === 1)
        this.P2res = 'Fifteen';
      if (this.P2point === 2)
        this.P2res = 'Thirty';
      this.score = this.P1res + '-' + this.P2res;
    }
    //-----------------------------------
    //player 1 ventaja a player 2 y player 2 mas de 2 puntos
    if (this.P1point > this.P2point && this.P2point >= 3) {
      this.score = 'Advantage player1';
    }
    return this.score;
  }
  //-----------------------------------------------------------
  //player 2 adventage
  player2Adventage(): string {
    //---------------------------
    //player 1 tiene ventaja y player 2 0 puntos
    if (this.P2point > 0 && this.P1point === 0) {
      if (this.P2point === 1)
        this.P2res = 'Fifteen';
      if (this.P2point === 2)
        this.P2res = 'Thirty';
      if (this.P2point === 3)
        this.P2res = 'Forty';

      this.P1res = 'Love';
      this.score = this.P1res + '-' + this.P2res;
    }
    //---------------------------
    //player 2 tiene ventaja a player 1
    if (this.P2point > this.P1point && this.P2point < 4) {
      if (this.P2point === 2)
        this.P2res = 'Thirty';
      if (this.P2point === 3)
        this.P2res = 'Forty';
      if (this.P1point === 1)
        this.P1res = 'Fifteen';
      if (this.P1point === 2)
        this.P1res = 'Thirty';
      this.score = this.P1res + '-' + this.P2res;
    }
    //-----------------------------------
    //player 2 ventaja a player 1 y player 1 mas de 2 puntos
    if (this.P2point > this.P1point && this.P1point >= 3) {
      this.score = 'Advantage player2';
    }
    return this.score;
  }
  //---------------------------------------------------------
  // select winner cuando points mayor a 4 y diferencia de 2 puntos entre players
  selectWinner(): string {
    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
      this.score = 'Win for player1';
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
      this.score = 'Win for player2';
    }
    return this.score;
  }
}
