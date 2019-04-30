import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <NumberButton customClass="black-btn" number="0"  />
	<br />
	<NumberButton customClass="blank-btn" number="clear"  />
	<ActionButton customClass="action-btn" action="÷" />  
	<br />  
	<NumberButton customClass="number-btn" number="7" />
        <NumberButton customClass="number-btn" number="8" />
        <NumberButton customClass="number-btn" number="9" />
	<ActionButton customClass="action-btn" action="×" />
	<br /> 
	<NumberButton customClass="number-btn" number="4" />
        <NumberButton customClass="number-btn" number="5" />
        <NumberButton customClass="number-btn" number="6" /> 
	<ActionButton customClass="action-btn" action="−" />
	<br />  
	<NumberButton customClass="number-btn" number="1" />
	<NumberButton customClass="number-btn" number="2" />
	<NumberButton customClass="number-btn" number="3" /> 
	<ActionButton customClass="action-btn" action="+" />
	<br />
	<NumberButton customClass="blank-btn" number="0"  />
        <ActionButton customClass="action-btn" action="=" />
    </div>
  );
};

export default App;
