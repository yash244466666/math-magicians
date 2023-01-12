import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class ClaculatorUI extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  clickReceived = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(this.state, buttonName);
    this.setState(answer);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__display">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator__keypad">
          <div className="calculator__keypad__row_1">
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>AC</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>+/-</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>%</button>
            <button className="calculator__keypad__button sym" type="button" onClick={this.clickReceived}>&#247;</button>
          </div>
          <div className="calculator__keypad__row_2">
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>7</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>8</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>9</button>
            <button className="calculator__keypad__button sym" type="button" onClick={this.clickReceived}>x</button>
          </div>
          <div className="calculator__keypad__row_3">
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>4</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>5</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>6</button>
            <button className="calculator__keypad__button sym" type="button" onClick={this.clickReceived}>-</button>
          </div>
          <div className="calculator__keypad__row_4">
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>1</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>2</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>3</button>
            <button className="calculator__keypad__button sym" type="button" onClick={this.clickReceived}>+</button>
          </div>
          <div className="calculator__keypad__row_5">
            <button className="calculator__keypad__button fillmore" type="button" onClick={this.clickReceived}>0</button>
            <button className="calculator__keypad__button" type="button" onClick={this.clickReceived}>.</button>
            <button className="calculator__keypad__button sym" type="button" onClick={this.clickReceived}>=</button>
          </div>
        </div>
      </div>

    );
  }
}
