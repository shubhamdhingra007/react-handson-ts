import React from "react";
import "./comp2.css";

function Comp2(props: any) {
  return (
    <div>
      <h1>Component 2</h1>
      <div className="pace">
        <div className="pace-activity"></div>
      </div>
      <form>
        {props.label} &nbsp;
        <input type="text" defaultValue={process.env.NODE_ENV} />
      </form>
      <div>{props.children}</div>
    </div>
  );
}

export default Comp2;
