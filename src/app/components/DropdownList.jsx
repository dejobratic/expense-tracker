import React from "react"

import "app/components/BudgetDetails.css"

const DropdownList = ({ value, onChange, children }) => {
  return (
    <select className="add__type" value={value} onChange={onChange}>
      {children}
    </select>
  )
}

export default DropdownList
