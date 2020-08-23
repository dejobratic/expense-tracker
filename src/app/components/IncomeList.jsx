import React from "react"
import Income from "./Income"

const IncomeList = ({ incomeList = [] }) => {
  return (
    <div className="income">
      <h2 className="income__title">Income</h2>
      {incomeList.map((income) => (
        <Income key={income.id} income={income} />
      ))}
      <div className="income__list"></div>
    </div>
  )
}

export default IncomeList
