import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses: [];
  @Output() emitRemoveItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // эмитим id удаляемой статьи
  removeItem(id: string): void {
    this.emitRemoveItem.emit(id);
  }
}
