import React from "react";

export default function ListView(props) {
    return (<div className="listview">
        <table>
            <thead>
                <tr>
                    <td>Amount</td>
                    <td>Account</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {props.transactions.map(element =>
                    <tr key={element.key}>
                        <td>{element.amount}</td>
                        <td>{element.account}</td>
                        <td>{element.date}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>)
}