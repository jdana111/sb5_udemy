import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <label htmlFor="name" className="label">
      enter email address
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: "red", color: "white" }}>Submit</button>
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
