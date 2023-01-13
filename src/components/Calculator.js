import React, { useState } from 'react';
import calculate from '../logic/calculate';

const ClaculatorUI = () => {
  const info = { total: 0, next: null, operation: null };
  const [state, setState] = useState(info);

  const clickReceived = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(state, buttonName);
    setState(answer);
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="calculator__display">
        {total}
        {operation}
        {next}
      </div>
      <div className="calculator__keypad">
        <div className="calculator__keypad__row_1">
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>AC</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>+/-</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>%</button>
          <button className="calculator__keypad__button sym" type="button" onClick={clickReceived}>&#247;</button>
        </div>
        <div className="calculator__keypad__row_2">
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>7</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>8</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>9</button>
          <button className="calculator__keypad__button sym" type="button" onClick={clickReceived}>x</button>
        </div>
        <div className="calculator__keypad__row_3">
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>4</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>5</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>6</button>
          <button className="calculator__keypad__button sym" type="button" onClick={clickReceived}>-</button>
        </div>
        <div className="calculator__keypad__row_4">
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>1</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>2</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>3</button>
          <button className="calculator__keypad__button sym" type="button" onClick={clickReceived}>+</button>
        </div>
        <div className="calculator__keypad__row_5">
          <button className="calculator__keypad__button fillmore" type="button" onClick={clickReceived}>0</button>
          <button className="calculator__keypad__button" type="button" onClick={clickReceived}>.</button>
          <button className="calculator__keypad__button sym" type="button" onClick={clickReceived}>=</button>
        </div>
      </div>
    </div>

  );
};
export default ClaculatorUI;
