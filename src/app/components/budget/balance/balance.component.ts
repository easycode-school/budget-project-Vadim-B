import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  @Input() balans;

  // текущий месяц
  public month: string;

  public sumIncome = 0;
  public sumExpenses = 0;

  constructor() { }

  ngOnInit() {
    // определим текущий месяц при загрузке страницы
    const monthNum: number = new Date().getMonth();
    enum Month { January, February, March, April, May, June, July, August, September, October, November, December }
    const month: string = Month[monthNum];
    this.month = month;
  }
}
