import React, { useState } from 'react'
import logo from '../logo.svg'
import './Toggle.css'
import Contacts from 'components/Contact/Contacts';


export default function Toggle ({onChange }) {
  const [isOpened, setIsOpened] = useState(false);
  const handleToggleModal = () => setIsOpened(!isOpened);
  return (
<div className="App">
    <header className="App-header">
        <svg  className="App-logo" onClick={onChange}>
          <use href={logo+'#react'}></use>
        </svg>
        <div onClick={handleToggleModal}> dyns.dev</div>
    {isOpened && <Contacts onCloseModal={handleToggleModal} />}
    </header>
  </div>
  )
}