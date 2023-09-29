import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import Chart from "./components/Chart";

const initialExpenses = [
  {
    id: 1,
    name: "hat",
    amount: 12.23,
    date: new Date("September 15, 2023 15:00:00"),
  },
  {
    id: 2,
    name: "dvd",
    amount: 2.23,
    date: new Date("October 16, 2023 16:00:00"),
  },
  {
    id: 3,
    name: "car",
    amount: 1266.23,
    date: new Date("December 22, 2023 18:00:00"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div className='App'>
      <ExpenseForm addExpense={addExpense} />
      <Chart />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
