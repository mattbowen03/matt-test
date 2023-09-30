import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart({ expenses }) {
  const chartData = [
    { monthName: "Jan", spending: 0 },
    { monthName: "Feb", spending: 0 },
    { monthName: "Mar", spending: 0 },
    { monthName: "Apr", spending: 0 },
    { monthName: "May", spending: 0 },
    { monthName: "Jun", spending: 0 },
    { monthName: "Jul", spending: 0 },
    { monthName: "Aug", spending: 0 },
    { monthName: "Sep", spending: 0 },
    { monthName: "Oct", spending: 0 },
    { monthName: "Nov", spending: 0 },
    { monthName: "Dec", spending: 0 },
  ];

  let totalSpent = 0;

  expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    chartData[month].spending += expense.amount;
    totalSpent += expense.amount;
    console.log(chartData[month]);
    console.log(totalSpent);
  });

  return (
    <div className='chart__wrap'>
      {chartData.map((monthData) => (
        <ChartBar
          key={monthData.monthName}
          monthData={monthData}
          totalSpent={totalSpent}
        />
      ))}
    </div>
  );
}

export default Chart;
