import React, { useEffect, useReducer, createContext } from "react"

import Budget from "app/models/Budget"
import { Income, Expense } from "app/models/BudgetItem"

const NEW_BUDGET = "new-budget"
const ADD_INCOME = "add-income"
const REMOVE_INCOME = "remove-income"
const ADD_EXPENSE = "add-expense"
const REMOVE_EXPENSE = "remove-expense"

const createNewBudget = (budget) => {
  const newBudget = new Budget()
  newBudget.incomes = budget.incomes
  newBudget.expenses = budget.expenses

  return newBudget
}

const budgetReducer = (budget, action) => {
  switch (action.type) {
    case NEW_BUDGET:
      return action.payload
    case ADD_INCOME:
      budget.incomes.add(action.payload)
      return createNewBudget(budget)
    case REMOVE_INCOME:
      budget.incomes.remove(action.payload)
      return createNewBudget(budget)
    case ADD_EXPENSE:
      budget.expenses.add(action.payload)
      return createNewBudget(budget)
    case REMOVE_EXPENSE:
      budget.expenses.remove(action.payload)
      return createNewBudget(budget)
    default:
      throw Error(`Unknown budget reducer action type ${action.type}.`)
  }
}

const BudgetContext = createContext()

const BudgetProvider = ({ children }) => {
  const [budget, dispatchBudget] = useReducer(budgetReducer, new Budget())

  useEffect(() => {
    const budget = new Budget()
    budget.incomes.add(new Income("Salary", 2500))
    budget.expenses.add(new Expense("Rent", 550))

    dispatchBudget({ type: NEW_BUDGET, payload: budget })
  }, [])

  return (
    <BudgetContext.Provider value={{ budget, dispatchBudget }}>
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetContext, BudgetProvider }
export { ADD_INCOME, REMOVE_INCOME, ADD_EXPENSE, REMOVE_EXPENSE }
