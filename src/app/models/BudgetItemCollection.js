import { toFormattedString } from "app/common/BudgetExtensions"

class BudgetItemCollection {
  constructor() {
    this._items = []
    this.totalAmount = 0
  }

  add = (item) => {
    this._items.push(item)
    this.totalAmount += item.amount
  }

  remove = (item) => {
    this._items = this._items.filter((current) => current.id !== item.id)
    this.totalAmount -= item.amount
  }

  toArray = () => this._items
}

class IncomeCollection extends BudgetItemCollection {
  get formattedTotalAmount() {
    return toFormattedString(this.totalAmount)
  }
}

class ExpensesCollection extends BudgetItemCollection {
  get formattedTotalAmount() {
    return toFormattedString(-this.totalAmount)
  }
}

export { IncomeCollection, ExpensesCollection }
