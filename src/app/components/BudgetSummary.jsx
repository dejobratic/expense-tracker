import React from "react"

import TotalIncome from "app/components/TotalIncome"
import TotalExpenses from "app/components/TotalExpenses"

import "app/components/BudgetSummary.css"

const BudgetSummary = () => {
  const getCurrentDate = () => {
    const date = new Date()
    const month = date.toLocaleString("default", { month: "long" })
    return `${month} ${date.getFullYear()}`
  }

  return (
    <div className="budget">
      <div className="budget__title">
        Available Budget in{" "}
        <span className="budget__title--month">{getCurrentDate()}</span>:
      </div>

      <div className="budget__value">+ 2,345.64</div>

      <TotalIncome />

      <TotalExpenses />
    </div>
  )
}

export default BudgetSummary
