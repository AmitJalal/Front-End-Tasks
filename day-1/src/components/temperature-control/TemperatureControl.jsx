import "./t.css";

import React, { useState } from "react";

const TemperatureControl = () => {
  const [temp, setTemp] = useState(10);
  return (
    <div className="wrapper">
      <div className="temperature ab-center">{temp}{'\u00B0'}C</div>
      <div className="controller">
        <button className="ab-center" onClick={() => setTemp(temp + 1)}>
          +
        </button>
        <button className="ab-center" onClick={() => setTemp(temp - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default TemperatureControl;
