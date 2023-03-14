import { useState } from 'react';
import './App.css'
import AccountForm from './components/AccountForm';
import ListView from './components/ListView';
import NewAccuntModal from './components/Modal/NewAccountModal';

function App() {

  const dummyData = [
    {
      amount: 100,
      account: "Bulder bruk",
      date: new Date().toDateString(),
      key: 0
    },
    {
      amount: 200,
      account: "Totens",
      date: new Date().toDateString(),
      key: 1
    }
  ];

  const dummyAccounts = [
    "Bulder",
    "Totens",
    "Fundingpartner",
    "Kron",
    "Nordnet"
  ];

  const [transactions, setTransactions] = useState(dummyData);
  const [accounts, setAccounts] = useState(dummyAccounts);
  const [showNewAccountModal, setShowNewAccountModal] = useState(false);

  function handleNewTransaction(transaction) {
    const t = { ...transaction, key: transactions.length }
    setTransactions(e => [...e, t]);
  }

  function handleNewAccount(account) {
    setAccounts(a => [...a, account]);
  }

  function handleShowModal(){
    setShowNewAccountModal(s => !s);
  }

  return (
    <div className="App">
      <button onClick={handleShowModal}>Add new Account</button>
      <NewAccuntModal
        show={showNewAccountModal}
        handleNewAccount={handleNewAccount}
        handleShowModal={handleShowModal}
      />
      <AccountForm
        handleNewTransaction={handleNewTransaction}
        accounts={accounts}
      />
      <ListView
        transactions={transactions}
      />
    </div>
  );
}

export default App;
