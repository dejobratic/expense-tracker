import { v4 as uuid } from "uuid"

import { toFormattedString } from "app/common/BudgetExtensions"

class BudgetItem {
  constructor(title, amount) {
    this.id = uuid()
    this.title = title
    this.amount = parseFloat(amount)
    this.formattedAmount = (() => toFormattedString(this.amount))()

    this.throwIfInvalid()
  }

  throwIfInvalid = () => {
    if (/^\s*$/.exec(this.title)) throw Error(`Title must be specified.`)
    if (this.amount <= 0) throw Error(`Amount must be greater than zero.`)
  }
}

class Income extends BudgetItem {
  constructor(title, amount) {
    super(title, amount)
  }
}

class Expense extends BudgetItem {
  constructor(title, amount) {
    super(title, amount)
  }
}

export { Income, Expense }
