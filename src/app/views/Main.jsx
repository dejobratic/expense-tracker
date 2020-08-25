import React, { useContext } from "react"

import BudgetSummary from "app/components/BudgetSummary"
import BudgetForm from "app/components/BudgetForm"
import BudgetDetails from "app/components/BudgetDetails"

import { BudgetContext } from "app/common/BudgetContext"

const Main = () => {
  const { budget } = useContext(BudgetContext)

  return (
    <>
      <div className="top">
        <BudgetSummary budget={budget} />
      </div>
      <div className="bottom">
        <BudgetForm />
        <BudgetDetails budget={budget} />
      </div>
    </>
  )
}

export default Main
