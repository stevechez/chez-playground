import React from 'react'
import { AddTransaction } from './AddTransaction'
import { Balance } from './Balance'
import './expense-tracker.module.css'
import { IncomeExpenses } from './IncomeExpenses'
import { TransactionList } from './TransactionList'
import styles from './expense-tracker.module.css'

export default function ExpenseTracker() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className={styles.containerInner}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}
