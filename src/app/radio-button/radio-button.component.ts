import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  lasha: string = ''
  bets:any = [
    {
      betFirst: {position: '1', value: '2.5'},
      betSecond: {position: 'x', value: '2.5'},
      betThird: {position: '2', value: '2.5'}
    },
    {
      betFirst: {position: '1', value: '2.5'},
      betSecond: {position: 'x', value: '2.5'},
      betThird: {position: '2', value: '2.5'}
    },

  ]

  allBets = ['betFirst','betSecond', 'betthird']

constructor(){

}
}
