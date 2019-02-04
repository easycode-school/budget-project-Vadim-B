import { Component, OnInit, DoCheck, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit, DoCheck {
  @Output() balansStorage = new EventEmitter();
  @Output() emitBalans = new EventEmitter();
  @Input() removeItemId: string;

  public storage = {
    income: [], // статьи доходов
    expenses: [] // статьи расходов
  };
  public newInput = {
    description: '',
    value: '',
    id: ''
  }; // новая статья

  // зарезервируем объект, в котором будем записывать сумму доходов, расходов и общего баланса
  public balans = {
    sumIncome: '0',
    sumExpenses: '0',
    balans: '0'
  };

  public newInputType = 'income'; // тип новой статьи
  public lastRemoveItemId: string; // id последней удаленной статьи

  constructor() { }

  ngOnInit() {
    // эмитим баланс
    this.balansStorage.emit(this.storage);
    // эмитим баланс
    this.emitBalans.emit(this.balans);
  }

  ngDoCheck() {
    // при измении содержимого модуля, проверяем есть ли НОВЫЙ переданный id для удаления статьи
    if (this.removeItemId && this.removeItemId !== this.lastRemoveItemId) {
      // если есть, то вызываем метод для удаления статьи с переданным id
      this.removeItem();
    }
  }

  /**
   * метод для добавления новой статьи в общий список
   * @param addNewItemForm - свойства состояния формы
   */
  public addNewItem(addNewItemForm: NgForm): void {
    // генерируем id для новой тудушки
    this.newInput.id = this.generateId();

    // проверяем заполнены ли поля
    if (addNewItemForm.invalid) {
      alert('Заполните все поля');
    // добавляем новую статью в доход или в расход, в зависимости от значения селекта
    } else if (this.newInputType === 'income') {
      this.storage.income.push(Object.assign({}, this.newInput));
    } else {
      this.storage.expenses.push(Object.assign({}, this.newInput));
    }

    // чистим форму, селект оставляем в выбранном положении
    //? не получилось использовать resetForm(), т.к. чистился и select
    this.newInput = {
      description: '',
      value: '',
      id: ''
    };

    // считаем баланс
    this.getCalculationBalans();
  }

  /**
   * метод для генерации id
   */
  private generateId(): string {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * words.length);
      id += words[index];
    }

    return id;
  }

  // метод для удаления статьи по id
  private removeItem() {
    this.storage.income = this.storage.income.filter(item => item.id !== this.removeItemId);
    this.storage.expenses = this.storage.expenses.filter(item => item.id !== this.removeItemId);
    this.lastRemoveItemId = this.removeItemId;

    // пересчитываем баланс
    this.getCalculationBalans();
  }

  // метод для подсчета баланса
  getCalculationBalans() {
    let sumIncome: number;
    let sumExpenses: number;
    let balans: number;

    // сумма статей дохода
    sumIncome = this.storage.income.reduce((sum, current) => {
      return sum + (+ current.value);
    }, 0);
    this.balans.sumIncome = (!sumIncome ? '' : '+ ') + sumIncome;

    // сумма статей расхода
    sumExpenses = this.storage.expenses.reduce((sum, current) => {
      return sum + (+ current.value);
    }, 0);
    this.balans.sumExpenses = (!sumExpenses ? '' : '- ') + sumExpenses;

    // общий баланс
    balans = sumIncome - sumExpenses;
    this.balans.balans = (sumIncome > sumExpenses ? '+ ' : '') + balans;

    // эмитим баланс
    // this.emitBalans.emit(this.balans);
  }
}
