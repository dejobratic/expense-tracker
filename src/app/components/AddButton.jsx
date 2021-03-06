import React from "react"

import "app/components/BudgetForm.css"

const AddButton = ({ onClick }) => {
  return (
    <button className="add__btn" onClick={onClick}>
      <i className="ion-ios-checkmark-outline"></i>
    </button>
  )
}

export default AddButton
