import React from "react"

import BudgetSummary from "app/components/BudgetSummary"
import BudgetForm from "app/components/BudgetForm"
import BudgetDetails from "app/components/BudgetDetails"

const Main = () => {
  return (
    <>
      <div className="top">
        <BudgetSummary />
      </div>
      <div className="bottom">
        <BudgetForm />
        <BudgetDetails />
      </div>
    </>
  )
}

export default Main
