import React from "react"

const Expense = ({ expense = {} }) => {
  return (
    <div className="item clearfix" id="expense-0">
      <div className="item__description">{expense.title}</div>
      <div className="right clearfix">
        <div className="item__value">{expense.formattedAmount}</div>
        <div className="item__percentage">
          {expense.formattedBudgetPercentage}
        </div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Expense
