import React, { useState } from "react";

export default function AccountForm(props) {
    const [amount, setAmount] = useState();
    const [account, setAccount] = useState();
    const [date, setDate] = useState();

    function handleForm(e) {
        e.preventDefault()
        props.handleNewTransaction({amount, account, date})
    }

    return(
        <form onSubmit={handleForm}>
            <label>
                Account:
                <select onChange={e => setAccount(e.target.value)}>
                    {props.accounts.map((e, i) => 
                    <option key={i}>{e}</option>
                    )}
                </select>
            </label>
            <br/>
            <label>
                Amount:
                <input type="number" name="amount" step={1} onChange={e => setAmount(e.target.value)}/>
            </label>
            <br/>
            <label>
                Date:
                <input type="date" name="date" onChange={e => setDate(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}