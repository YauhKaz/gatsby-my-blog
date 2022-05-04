import React from 'react'

import * as styles from '../assets/css/infoLine.module.css'

export const InfoLine = () => {
  return (
    <section className={styles.infoLine}>
      <ul className={styles.infoWrapper}>
        <li className={styles.infoItem}>
          <p className={styles.infoNumber}>10</p>
          <p>Countries Visited</p>
        </li>
        <li className={styles.infoItem}>
          <p className={styles.infoNumber}>2</p>
          <p>Continents Visited</p>
        </li>
        <li className={styles.infoItem}>
          <p className={styles.infoNumber}>20</p> 
          <p>Torn Pairs of Shoes</p>
        </li>
        <li className={styles.infoItem}>
          <p className={styles.infoNumber}>15</p>
          <p>Lost Backpacks</p>
        </li>
      </ul>
    </section>
  )
}