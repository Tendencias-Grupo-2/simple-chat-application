import { React, useState, useEffect, Component } from "react";
import "./TestComponent-Style.css";

const TestComponent = () => {
  const [value, setValue] = useState(0);
  
  return (
    <div>
      <h2>My testComponent</h2>
      <div className="pressme-value">{value}</div>
      <button className="pressme-btnp" onClick={() => setValue(value + 1)}>
        Press Me
      </button>
      <button className="pressme-btnm" onClick={() => setValue(value - 1)}>
        Press Me
      </button>
    </div>
  );
};

export default TestComponent;
