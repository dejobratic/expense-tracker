import React, { useContext } from "react"

import BudgetSummary from "app/components/BudgetSummary"
import BudgetDetails from "app/components/BudgetDetails"

import { BudgetContext } from "app/common/BudgetContext"

import { Income, Expense } from "app/models/BudgetItem"
import { ADD_INCOME, ADD_EXPENSE } from "app/common/BudgetContext"

const Main = () => {
  const { budget, dispatchBudget } = useContext(BudgetContext)

  const handleAddNewItem = (item) => {
    const addNewIncome = (income) =>
      dispatchBudget({ action: ADD_INCOME, payload: income })

    const addNewExpense = (expense) =>
      dispatchBudget({ action: ADD_EXPENSE, payload: expense })

    if (item instanceof Income) {
      return addNewIncome(item)
    } else if (item instanceof Expense) {
      return addNewExpense(item)
    } else {
      throw Error(`Unhandled budget item type ${typeof item}`)
    }
  }

  return (
    <>
      <div className="top">
        <BudgetSummary budget={budget} />
      </div>
      <div className="bottom">
        <BudgetDetails budget={budget} onAddNewItem={handleAddNewItem} />
      </div>
    </>
  )
}

export default Main
