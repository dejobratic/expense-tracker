import React from "react"

import "app/components/BudgetForm.css"

const InputNumber = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="add__value"
      placeholder="Amount"
      value={value}
      onChange={onChange}
    />
  )
}

export default InputNumber
