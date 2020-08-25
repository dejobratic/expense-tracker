import React, { useContext } from "react"

import { BudgetContext, REMOVE_EXPENSE } from "app/common/BudgetContext"

const Expense = ({ expense = {} }) => {
  const { dispatchBudget } = useContext(BudgetContext)

  const handleRemoveExpense = (expense) => {
    dispatchBudget({ type: REMOVE_EXPENSE, payload: expense })
  }

  return (
    <div className="item clearfix" id="expense-0">
      <div className="item__description">{expense.title}</div>
      <div className="right clearfix">
        <div className="item__value">{expense.formattedAmount}</div>
        <div className="item__percentage">
          {expense.formattedBudgetPercentage}
        </div>
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={() => handleRemoveExpense(expense)}
          >
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Expense
