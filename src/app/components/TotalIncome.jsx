import React from "react"

import "app/components/BudgetSummary.css"

const TotalIncome = ({ amount = "+ 0.00" }) => {
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">{amount}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  )
}

export default TotalIncome
