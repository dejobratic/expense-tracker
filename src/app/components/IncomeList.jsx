import React from "react"
import Income from "./Income"

const IncomeList = ({ items = [] }) => {
  return (
    <div className="income">
      <h2 className="income__title">Income</h2>
      {items.map((income) => (
        <Income key={income.id} income={income} />
      ))}
      <div className="income__list"></div>
    </div>
  )
}

export default IncomeList
