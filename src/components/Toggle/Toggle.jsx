import React from 'react'
import logo from '../logo.svg'
import './Toggle.css'

const Toggle = ({onChange }) => (
<div className="App">
    <header className="App-header">
        <svg  className="App-logo" onClick={onChange}>
          <use href={logo+'#react'}></use>
        </svg>
        <div> dyns.dev</div>
    </header>
  </div>
)

export default Toggle