import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
  expenseForm: FormGroup = new FormGroup({
    type        : new FormControl('', [Validators.required, Validators.maxLength(100)]),
    amount      : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    expense_date: new FormControl('', Validators.required)
  });

  constructor(
    private expenseService: ExpenseService,
    private router: Router
  ) { }

  saveExpense(): void {
    this.expenseService.createExpense(this.expenseForm.value).subscribe(expense => this.router.navigateByUrl('/gastos'));
  }

  hasError(field: string): boolean {
    const errorsObject = this.expenseForm.get(field)?.errors ?? {};
    const errors = Object.keys(errorsObject);

    if (errors.length && (this.expenseForm.get(field)?.touched || this.expenseForm.get(field)?.dirty)) {
      return true;
    }

    return false;
  }

  getCurrentError(field: string): string {
    const errorsObject = this.expenseForm.get(field)?.errors ?? {};
    const errors = Object.keys(errorsObject);

    if (!errors)
      return '';

    return errors[0];
  }
}
