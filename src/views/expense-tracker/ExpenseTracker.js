import React from 'react'
import { AddTransaction } from './AddTransaction'
import { Balance } from './Balance'
import './expense-tracker.module.css'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'

export default function ExpenseTracker() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="container-inner">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}
