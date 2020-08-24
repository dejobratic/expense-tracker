import React, { useReducer, createContext } from "react"

import Budget from "app/models/Budget"

const ADD_INCOME = "add-income"
const REMOVE_INCOME = "remove-income"
const ADD_EXPENSE = "add-expense"
const REMOVE_EXPENSE = "remove-expense"

const budgetReducer = (budget, action) => {
  console.log("reducer action", action)
  switch (action.type) {
    case ADD_INCOME:
      budget.incomes.add(action.payload)
      return budget
    case REMOVE_INCOME:
      budget.incomes.remove(action.payload)
      return budget
    case ADD_EXPENSE:
      budget.expenses.add(action.payload)
      return budget
    case REMOVE_EXPENSE:
      budget.expenses.remove(action.payload)
      return budget
    default:
      throw Error(`Unknown dispatch budget action type ${action.type}.`)
  }
}

const BudgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [budget, dispatchBudget] = useReducer(budgetReducer, new Budget())

  return (
    <BudgetContext.Provider value={{ budget, dispatchBudget }}>
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetContext, BudgetProvider }
export { ADD_INCOME, REMOVE_INCOME, ADD_EXPENSE, REMOVE_EXPENSE }
