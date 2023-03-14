import React, { useState } from "react";
import './NewAccountModal.css';

export default function NewAccuntModal(props) {
    const [accountName, setAccountName] = useState('');

    if(!props.show) {
        return
    }

    function handleModalForm(e) {
        e.preventDefault();
        props.handleNewAccount(accountName);
        props.handleShowModal();
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">New Account</h4>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleModalForm}>
                        <label>
                            Account name:
                            <input type="text" onChange={e => setAccountName(e.target.value)} />
                        </label>
                        <div className="modal-footer">
                    <button className="button" type="submit">Submit</button>
                </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}