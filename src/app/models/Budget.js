import {
  IncomeCollection,
  ExpensesCollection,
} from "app/models/BudgetItemCollection"

import { toFormattedString } from "app/common/BudgetExtensions"

class Budget {
  constructor() {
    this._incomes = new IncomeCollection()
    this._expenses = new ExpensesCollection()
  }

  set incomes(incomes) {
    this._incomes = incomes
  }

  get incomes() {
    return this._incomes
  }

  set expenses(expenses) {
    this._expenses = expenses
  }

  get expenses() {
    return this._expenses
  }

  get totalAmount() {
    return parseFloat(this.incomes.totalAmount - this.expenses.totalAmount)
  }

  get formattedTotalAmount() {
    return toFormattedString(this.totalAmount)
  }
}

export default Budget
