import React from 'react'
import styles from './expense-tracker.module.css'

export const TransactionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className={styles.list}>
        <li className={styles.minus}>
          Cash <span>-$400</span><button className={styles.deleteBtn}>x</button>
        </li>
      </ul>
    </div>
  )
}
