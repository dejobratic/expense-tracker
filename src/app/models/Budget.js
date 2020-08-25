import {
  IncomeCollection,
  ExpensesCollection,
} from "app/models/BudgetItemCollection"

import { toFormattedString } from "app/common/BudgetExtensions"

class Budget {
  constructor() {
    this.incomes = new IncomeCollection()
    this.expenses = new ExpensesCollection()
  }

  get totalAmount() {
    return this.incomes.totalAmount - this.expenses.totalAmount
  }

  get formattedTotalAmount() {
    return toFormattedString(this.totalAmount)
  }
}

export default Budget
