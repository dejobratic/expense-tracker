import {
  IncomeCollection,
  ExpensesCollection,
} from "app/models/BudgetItemCollection"

import { toFormattedString } from "app/common/BudgetExtensions"

class Budget {
  constructor() {
    this.incomes = new IncomeCollection()
    this.expenses = new ExpensesCollection()

    this.totalAmount = (() =>
      this.incomes.totalAmount - this.expenses.totalAmount)()

    this.formattedTotalAmount = (() => toFormattedString(this.totalAmount))()
  }
}

export default Budget
