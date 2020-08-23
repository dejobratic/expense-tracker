import React from "react"

const Income = ({ income = {} }) => {
  return (
    <div className="item clearfix" id="income-0">
      <div className="item__description">{income.title}</div>
      <div className="right clearfix">
        <div className="item__value">{`+ ${income.amount}`}</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Income
