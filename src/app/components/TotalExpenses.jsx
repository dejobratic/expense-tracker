import React from "react"

import "app/components/BudgetSummary.css"

const TotalExpenses = ({ amount = "- 0.00" }) => {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">{amount}</div>
        <div className="budget__expenses--percentage">45%</div>
      </div>
    </div>
  )
}

export default TotalExpenses
