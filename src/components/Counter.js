import React from 'react';
import '../styles/Counter.css';


function Counter ({count}){
     
  return(
    <div className=" Counter styleCount">
      {count}/10
    </div>
  );
}
export default Counter;