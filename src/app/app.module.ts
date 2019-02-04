import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BudgetComponent } from './components/budget/budget.component';
import { BalanceComponent } from './components/budget/balance/balance.component';
import { DataInputComponent } from './components/budget/data-input/data-input.component';
import { IncomeListComponent } from './components/budget/income-list/income-list.component';
import { ExpensesListComponent } from './components/budget/expenses-list/expenses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    BalanceComponent,
    DataInputComponent,
    IncomeListComponent,
    ExpensesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
