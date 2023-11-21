import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense.model';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(
    private expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    this.loadDataIntoTable();
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(response => {
      this.expenses = this.expenses.filter(expense => expense.id != id)
    });
  }

  private loadDataIntoTable(): void {
    this.expenseService.getExpenses().subscribe(expenses => this.expenses = expenses);
  }
}
