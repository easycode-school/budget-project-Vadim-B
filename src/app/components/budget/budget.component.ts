import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  @Output() emitBalans = new EventEmitter();
  @Output() emitRemove = new EventEmitter();
  @Input() removeItemId: string;
  @Input() balans: {};

  public storage: {};

  constructor() { }

  ngOnInit() { }

  // получаем статьи дохода и расхода из компоненты на уровень ниже
  EmitStorage(storage: {}) {
    this.storage = storage;
  }

    // получаем баланс из компоненты на уровень ниже и эмитим его на уровень выше
    balansEmit(balans: {}) {
      this.emitBalans.emit(balans);
    }

  // получаем id, удаляемой статьи, из компоненты на уровень ниже и эмитим его на уровень выше
  emitRemoveItem(id: string) {
    this.emitRemove.emit(id);
  }
}
