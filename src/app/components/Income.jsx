import React, { useContext } from "react"

import { BudgetContext } from "app/common/BudgetContext"
import { REMOVE_INCOME } from "app/common/BudgetContext"

const Income = ({ income = {} }) => {
  const { dispatchBudget } = useContext(BudgetContext)

  const handleDeleteIncome = (income) => {
    dispatchBudget({ type: REMOVE_INCOME, payload: income })
  }

  return (
    <div className="item clearfix" id="income-0">
      <div className="item__description">{income.title}</div>
      <div className="right clearfix">
        <div className="item__value">{income.formattedAmount}</div>
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={() => handleDeleteIncome(income)}
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Income
