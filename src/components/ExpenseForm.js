import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ addExpense }) {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      id: Math.floor(Math.random() * 1234),
      name: itemName,
      amount: amount,
      date: new Date(date),
    };

    console.log(expenseData);

    addExpense(expenseData);

    setAmount("");
    setDate("");
    setItemName("");
  };

  return (
    <div className='form__wrap'>
      <form className='expense__form' onSubmit={handleSubmit}>
        <label htmlFor='item-name'>Item name</label>
        <input
          required
          id='item-name'
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor='amount'>Amount</label>
        <input
          required
          id='amount'
          type='number'
          step='1'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor='date'>Date</label>
        <input
          required
          id='date'
          type='date'
          min='2020-01-01'
          max='2023-12-31'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
