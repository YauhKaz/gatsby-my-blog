import React from 'react'
import {Link} from 'gatsby'

import { socials } from '../constants/Cards'
import * as styles from '../assets/css/contactHeader.module.css'

export const ContactHeader = () => {
  return (
    <div className={styles.contactpage_socials}>
      <h3>Contact me here</h3>
      <ul className={styles.contactpage_socialList}>
        <li>
          <Link to='mailto:mail@mail.com' className={styles.contactpage_mailTel}>
            mail@mail.com
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to='tel:+375 12 3456789' className={styles.contactpage_mailTel}>
            +375 12 3456789
          </Link>  
        </li>
        <li>|</li>
        <ul className={styles.contactpage_socialLinks}>
          {
            socials.map((item, index) => {
            return (
              <li key={index} className={styles.contactpage_socialLink}>
                <Link to={item.link}>
                  <img src={item.source} alt={item.alternative} className={styles.contactpage_image}/>
                </Link>
              </li>
            )})
          }
        </ul>
      </ul>
    </div>
  )
}