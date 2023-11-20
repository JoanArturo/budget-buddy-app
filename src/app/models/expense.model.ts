export interface Expense {
  id: number;
  type: string;
  amount: number;
  description: string;
  expense_date: string;
  created_at?: string;
  updated_at?: string;
}
