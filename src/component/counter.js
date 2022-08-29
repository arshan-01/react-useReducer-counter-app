import "./Css/counter.css";
import React , {useReducer} from "react";
import {CounterReducer} from "./CounterReducer";
import { Action_Type } from "./CounterActionTypes";
let initialState = 0;

export default function CounterApp() {

  const [state, dispatch] = useReducer(CounterReducer , initialState);

    
  return (
    <div className="counter_app"> 
    <h4>Simple Counter Increment and Decrement </h4>
   <div className="counter_parts">
    <span>
   <button onClick={()=> dispatch({type : Action_Type.COUNT_DEC})} >-</button>
    </span>

    <span>{state}</span>

    <span>
    <button onClick={()=> dispatch({type : Action_Type.COUNT_INC})}>+</button>
    </span>
    
    </div>
  </div>

);
}


