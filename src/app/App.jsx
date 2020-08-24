import React from "react"

import Main from "app/views/Main"

import { BudgetProvider } from "app/common/BudgetContext"

import "app/App.css"

const App = () => {
  return (
    <BudgetProvider>
      <Main />
    </BudgetProvider>
  )
}

export default App
