import React from "react"

import IncomeList from "app/components/IncomeList"
import ExpensesList from "app/components/ExpensesList"

import {
  REMOVE_INCOME,
  REMOVE_EXPENSE,
} from "app/common/BudgetContext"

import "app/components/BudgetDetails.css"

const BudgetDetails = ({ budget, onRemoveBudgetItem }) => {
  const handleDeleteIncome = (income) => {
    onRemoveBudgetItem({ type: REMOVE_INCOME, payload: income })
  }

  const handleDeleteExpense = (expense) => {
    onRemoveBudgetItem({ type: REMOVE_EXPENSE, payload: expense })
  }

  return (
    <div className="container clearfix">
      <IncomeList
        items={budget.incomes.toArray()}
        onDeleteItem={handleDeleteIncome}
      />
      <ExpensesList
        items={budget.expenses.toArray()}
        onDeleteItem={handleDeleteExpense}
      />
    </div>
  )
}

export default BudgetDetails
