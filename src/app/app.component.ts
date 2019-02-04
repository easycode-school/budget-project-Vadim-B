import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public balans: {};
  public removeItemId: string;

  // Таким образом сумма доходов и расходов у нас доступны на верхнем уровне всех компонент
  inputBalans(balans: {}) {
    this.balans = balans;
  }

  inputRemoveItem(id: string) {
    this.removeItemId = id;
  }
}
