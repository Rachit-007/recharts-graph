import React, { useState } from "react";
import BarGraph from "./barGraph";
import LineGraph from "./lineGraph";

/**
 * there are two toggle buttons which shows and hides the graph upon user's choice
 * @returns graph component
 */
const ToggleGraph = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div style={{ margin: "30px 0px" }}>
        <button
          onClick={() => setToggle(true)}
          style={{ marginInline: "20px" }}
        >
          Line Graph
        </button>
        <button onClick={() => setToggle(false)}>Bar Graph</button>
      </div>
      {toggle ? <LineGraph /> : <BarGraph />}
    </>
  );
};

export default ToggleGraph;
