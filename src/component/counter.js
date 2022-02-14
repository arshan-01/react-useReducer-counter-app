import "./Css/counter.css";
import Button from "./button";
import { useState } from "react";

export default function CounterApp() {

const [counter, setCount] = useState(0);

let Increment = () => {
    setCount(counter + 1);
}
let Decrement = () => {
    if (counter > 0) {
        setCount(counter - 1)};
    }
    
  return (
  <div className="counter_app">
    <h4>Simple Counter Increment and Decrement </h4>
   <div className="counter_parts">
    <span>
    <Button title={"-"} action={Decrement}/>
    </span>

    <span>{counter}</span>

    <span>
        <Button title={"+"} action={Increment}/>
    </span>
    
    </div>
  </div>

);
}


