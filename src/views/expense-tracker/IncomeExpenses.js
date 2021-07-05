import React from 'react'
import styles from './expense-tracker.module.css'

export const IncomeExpenses = () => {
  return (
    <div>
      <h4>Expense</h4>
      <p id="money-minus" className={styles.money}>-$0.00</p>
    </div>
  )
}
