import React from "react";
import './Contacts.css'
import Modal from "components/Modal/Modal";

export default function Contacts ({ onCloseModal }) {

    return ( 
        <Modal onCloseModal={onCloseModal}>
        <div className="App-contacts">
            <ul>
            <li key={121}>Name:</li>
            <li key={221}>cell:</li>
            <li key={321}>fb:</li>
            </ul>
        </div>
        </Modal>
    );
}