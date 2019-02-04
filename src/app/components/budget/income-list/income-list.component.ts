import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  @Input() income: [];
  @Output() emitRemoveItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // эмитим id удаляемой статьи
  removeItem(id: string): void {
    this.emitRemoveItem.emit(id);
  }
}
