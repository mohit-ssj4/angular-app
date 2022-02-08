import { Component, OnInit } from '@angular/core';
import { RpsService } from 'src/app/services/rock-paper-scissors/rps.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('2s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class RpsComponent implements OnInit {
  ngOnInit(): void {}

  options: string[] = ['✊', '✋', '✌'];
  usersChoice: string = '';
  usersOption: string = '';
  computersOption: string = '';
  winner: string = '';

  constructor(private rpsService: RpsService) {}

  onClick() {
    console.log('Clicked!');
  }

  public onOptionSelect(usersChoice: string) {
    this.usersOption = usersChoice;
    if (usersChoice === '✊') {
      this.usersChoice = 'rock';
    } else if (usersChoice === '✋') {
      this.usersChoice = 'paper';
    } else {
      this.usersChoice = 'scissors';
    }

    this.rpsService.playRPS(this.usersChoice).subscribe((response) => {
      if (response.computersChoice === 'rock') {
        this.computersOption = '✊';
      } else if (response.computersChoice === 'paper') {
        this.computersOption = '✋';
      } else {
        this.computersOption = '✌';
      }
      this.winner = response.message;
    });
  }
}
