import { React, useState, useEffect, Component } from "react";
import "./TestComponent-Style.css";
import apiRequests from "../../utils/apiRequests.js";

const TestComponent = () => {
  const [value, setValue] = useState(0);
  const [apiData, setApiData] = useState(0);

  useEffect(() => {
    apiRequests().then((apiData) => {
      setApiData(apiData);
    });
  }, []);
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
      <h4>Username: {apiData.login}</h4>
    </div>
  );
};

export default TestComponent;
