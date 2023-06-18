// src/components/Toggle/index.js
import React from 'react'
import styles from './index.module.scss'
import logo from '../logo.svg'

const Toggle = ({ value, onChange }) => (
  <label className={styles.switch} htmlFor="toggler">
    <img src={logo} className="App-logo"   onClick={onChange} alt="logo" />
    {/* <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    /> */}
    <span className={styles.slider} />
    <span className={styles.wave} />
  </label>
)

export default Toggle