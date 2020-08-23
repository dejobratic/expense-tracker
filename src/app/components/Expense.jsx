import React from "react"

const Expense = ({ expense = {} }) => {
  return (
    <div class="item clearfix" id="expense-0">
      <div class="item__description">{expense.title}</div>
      <div class="right clearfix">
        <div class="item__value">{`- ${expense.amount}`}</div>
        <div class="item__percentage">{`100%`}</div>
        <div class="item__delete">
          <button class="item__delete--btn">
            <i class="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Expense
