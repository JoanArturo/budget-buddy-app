import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private readonly API_URL = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.API_URL}/expenses`);
  }

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.API_URL}/expenses/${id}`);
  }

  createExpense(data: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${this.API_URL}/expenses`, data);
  }

  updateExpense(id: number, data: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${this.API_URL}/expenses/${id}`, data);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/expenses/${id}`);
  }
}
