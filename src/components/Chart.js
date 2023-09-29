import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart() {
  const chartData = [
    { monthName: "Jan", spending: 12 },
    { monthName: "Feb", spending: 12 },
    { monthName: "Mar", spending: 12 },
    { monthName: "Apr", spending: 12 },
    { monthName: "May", spending: 12 },
    { monthName: "Jun", spending: 12 },
    { monthName: "Jul", spending: 12 },
    { monthName: "Aug", spending: 12 },
    { monthName: "Sep", spending: 12 },
    { monthName: "Oct", spending: 12 },
    { monthName: "Nov", spending: 12 },
    { monthName: "Dec", spending: 12 },
  ];
  return (
    <div className='chart__wrap'>
      {chartData.map((monthData) => (
        <ChartBar key={monthData.monthName} monthData={monthData} />
      ))}
    </div>
  );
}

export default Chart;
