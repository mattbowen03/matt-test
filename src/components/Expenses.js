import React from "react";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className='expenses__wrap'>
      {props.expenses.map((expense) => {
        return (
          <div key={expense.id} className='expense__wrap'>
            <div className='left'>
              <div className='date__wrap'>
                <div>
                  {expense.date.toLocaleString("en-US", { month: "short" })}
                </div>
                <div>{expense.date.getDate()}</div>
              </div>
              <div className='expense__text'>{expense.name.toUpperCase()}</div>
            </div>
            <div className='center'></div>
            <div className='right'>
              <div className='expense__text'>${expense.amount}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Expenses;
