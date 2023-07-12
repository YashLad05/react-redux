import React from "react";
import "./App.css";

const App = () => {
  return(
    <div className="App">
    <h1>Increment / Decrement Counter</h1>
    <h4>Using React and Redux</h4>
quantity
    <div className="quantity">
      <a href="/" className="quantity_minus" title="Decrement"><span> - </span></a>
      <input name="quantity" type="text" className="quantity_input" value="0" />
      <a href="/" className="quantity_plus" title="Increment"><span> + </span></a>
    </div>

    </div>
  )
};

export default App;
