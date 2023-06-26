import React, { useState, useEffect } from 'react'
import axios from 'axios';
import logo from '../logo.svg'
import './Toggle.css'
import Contacts from 'components/Contact/Contacts';

axios.defaults.baseURL = 'https://backend-dyns-dev.onrender.com';

export default function Toggle ({onChange }) {
  const [isOpened, setIsOpened] = useState(false);
  const [data, setDate] = useState(null);

  const fetchAllData = async () => {
  const response = await axios.get(`api`);
  return response;
};

  useEffect(() => {
    const dataRender = async () => {
      try {
        const data = await fetchAllData();
        console.log(data)
        setDate(data.data.message)
    } catch (error) {
        console.log(error);
      } 
    };
    dataRender();
  }, []);

  const handleToggleModal = () => setIsOpened(!isOpened);
  return (
<div className="App">
    <header className="App-header">
        <svg  className="App-logo" onClick={onChange}>
          <use href={logo+'#react'}></use>
        </svg>
        <span style={{ color: 'white', fontSize: 20 }}>
        {!data ? "Loading..." : data }
        </span>
        <div onClick={handleToggleModal}> dyns.dev</div>

    </header>
    {isOpened && <Contacts onCloseModal={handleToggleModal} />}
  </div>
  )
}
