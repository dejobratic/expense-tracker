import React, { useState } from "react"

import AddButton from "app/components/AddButton"
import DropdownList from "app/components/DropdownList"
import InputText from "app/components/InputText"
import InputNumber from "app/components/InputNumber"
import IncomeList from "app/components/IncomeList"
import ExpensesList from "app/components/ExpensesList"

import { Income, Expense } from "app/models/BudgetItem"

import "app/components/BudgetDetails.css"

const BudgetDetails = ({ budget, onAddNewItem }) => {
  const budgetType = {
    income: "inc",
    expense: "exp",
  }
  const defaultItemTitle = ""
  const defaultItemAmount = 0

  const [itemType, setItemType] = useState(budgetType.income)
  const [itemTitle, setItemTitle] = useState(defaultItemTitle)
  const [itemAmount, setItemAmount] = useState(defaultItemAmount)

  const handleItemTypeChange = (event) => {
    const itemType = event.target.value
    setItemType(itemType)
  }

  const handleItemTitleChange = (event) => {
    const itemTitle = event.target.value
    setItemTitle(itemTitle)
  }

  const handleItemAmountChange = (event) => {
    const itemAmount = event.target.value
    setItemAmount(itemAmount)
  }

  const handleAddNewItem = () => {
    const isValidTitle = () => /^\s*$/.exec(itemTitle) === null
    const isValidAmount = () => itemAmount > 0

    const addNewItem = () => {
      switch (itemType) {
        case budgetType.income:
          onAddNewItem(new Income(itemTitle, itemAmount))
          return
        case budgetType.expense:
          onAddNewItem(new Expense(itemTitle, itemAmount))
          return
        default:
          throw new Error(`Unhandled budget item type ${itemType}.`)
      }
    }

    if (isValidTitle() && isValidAmount()) {
      addNewItem()

      setItemTitle(defaultItemTitle)
      setItemAmount(defaultItemAmount)
    }
  }

  return (
    <div className="bottom">
      <div className="add">
        <div className="add__container">
          <DropdownList value={itemType} onChange={handleItemTypeChange}>
            <option value={budgetType.income}>+</option>
            <option value={budgetType.expense}>-</option>
          </DropdownList>
          <InputText value={itemTitle} onChange={handleItemTitleChange} />
          <InputNumber value={itemAmount} onChange={handleItemAmountChange} />
          <AddButton onClick={handleAddNewItem} />
        </div>
      </div>
      <div className="container clearfix">
        <IncomeList items={budget.incomes.toArray()} />
        <ExpensesList items={budget.expenses.toArray()} />
      </div>
    </div>
  )
}

export default BudgetDetails
