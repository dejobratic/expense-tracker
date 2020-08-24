import React from "react"
import Expense from "./Expense"

const ExpensesList = ({ items = [] }) => {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      {items.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
      <div className="expenses__list"></div>
    </div>
  )
}

export default ExpensesList
