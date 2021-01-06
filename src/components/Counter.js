import React from 'react';
import '../styles/Counter.css';

function Counter ({count}){
  return(
    <div className=" Counter styleCount">
      {count}/9
    </div>
  );
}
export default Counter;