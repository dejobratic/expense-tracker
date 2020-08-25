import React from "react"

import "app/components/BudgetForm.css"

const InputText = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="add__description"
      placeholder="Add description"
      value={value}
      onChange={onChange}
    />
  )
}

export default InputText
