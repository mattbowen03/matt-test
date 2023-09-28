import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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
  return (
    <div className='App'>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
