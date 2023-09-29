import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  return (
    <div className='chartbar'>
      <div className='empty' style={{ height: "50%" }}></div>
      <div className='fill' style={{ height: "50%" }}></div>
      <p>{props.monthData.monthName}</p>
    </div>
  );
}

export default ChartBar;
