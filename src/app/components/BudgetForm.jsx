import React, { useState, useContext } from "react"

import AddButton from "app/components/AddButton"
import DropdownList from "app/components/DropdownList"
import InputText from "app/components/InputText"
import InputNumber from "app/components/InputNumber"

import { BudgetContext } from "app/common/BudgetContext"
import { ADD_INCOME, ADD_EXPENSE } from "app/common/BudgetContext"

import { Income, Expense } from "app/models/BudgetItem"

import "app/components/BudgetForm.css"

const BudgetForm = () => {
  const budgetType = {
    income: "inc",
    expense: "exp",
  }
  const defaultItemTitle = ""
  const defaultItemAmount = 0

  const [itemType, setItemType] = useState(budgetType.income)
  const [itemTitle, setItemTitle] = useState(defaultItemTitle)
  const [itemAmount, setItemAmount] = useState(defaultItemAmount)

  const { dispatchBudget } = useContext(BudgetContext)

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
          return dispatchBudget({
            type: ADD_INCOME,
            payload: new Income(itemTitle, itemAmount),
          })
        case budgetType.expense:
          return dispatchBudget({
            type: ADD_EXPENSE,
            payload: new Expense(itemTitle, itemAmount),
          })
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
  )
}

export default BudgetForm
