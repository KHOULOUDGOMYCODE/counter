import React from 'react';
import './App.css';
import{connect} from 'react-redux'
import {inc, dec } from './Actions'



function App(props) {
  return (
    <div>
    <div className='title'>My Counter</div>
    <div className="App">
      <button onClick={()=>props.inc()}>+</button>
     <div className='value'> <span>{props.count}</span> </div>
      <button onClick={()=>props.dec()}>-</button>
      </div>
    </div>
  );
}
const mapStatetoProps=(state)=>{
return {
  count:state.count}
}
const mapDispatchtoProps=(dispatch)=>{
  return{
    inc:()=>dispatch(inc()),
    dec:()=>dispatch(dec()),
  }
}

export default connect (mapStatetoProps, mapDispatchtoProps) (App);
