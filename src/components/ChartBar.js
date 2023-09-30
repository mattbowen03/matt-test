import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let percentFill = 0;
  let percentEmpty = 100;
  if (props.monthData.spending > 0) {
    percentFill = (props.monthData.spending / props.totalSpent) * 100;
    percentEmpty = (100 - percentFill).toFixed(0) + "%";
    percentFill = percentFill.toFixed(2) + "%";

    console.log(`${props.monthData.monthName} percent fill:`, percentFill);
  }
  return (
    <div className='chartbar'>
      <div className='empty' style={{ height: percentEmpty }}></div>
      <div className='fill' style={{ height: percentFill }}></div>
      <p>{props.monthData.monthName}</p>
    </div>
  );
}

export default ChartBar;
