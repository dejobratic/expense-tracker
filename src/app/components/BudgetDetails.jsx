import React from "react"
import IncomeList from "./IncomeList"
import ExpensesList from "./ExpensesList"

import "app/components/BudgetDetails.css"

const BudgetDetails = () => {
  return (
    <div className="container clearfix">
      <IncomeList />
      <ExpensesList />
    </div>
  )
}

export default BudgetDetails
