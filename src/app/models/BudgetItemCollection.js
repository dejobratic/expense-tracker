import { toFormattedString } from "app/common/BudgetExtensions"

class BudgetItemCollection {
  constructor() {
    this._items = []
  }

  get totalAmount() {
    const totalAmount = this._items.reduce((a, b) => a + (b["amount"] || 0), 0)
    return parseFloat(totalAmount)
  }
  add = (item) => {
    this._items.push(item)
  }

  remove = (item) => {
    this._items = this._items.filter((current) => current.id !== item.id)
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
    return toFormattedString(this.totalAmount)
  }
}

export { IncomeCollection, ExpensesCollection }
