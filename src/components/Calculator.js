import React, { Component } from 'react';

export default class ClaculatorUI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">0</div>
        <div className="calculator__keypad">
          <div className="calculator__keypad__row_1">

            <button className="calculator__keypad__button" type="submit">C</button>
            <button className="calculator__keypad__button" type="submit">+/-</button>
            <button className="calculator__keypad__button" type="submit">%</button>
            <button className="calculator__keypad__button sym" type="submit">+</button>
          </div>
          <div className="calculator__keypad__row_2">
            <button className="calculator__keypad__button" type="submit">7</button>
            <button className="calculator__keypad__button" type="submit">8</button>
            <button className="calculator__keypad__button" type="submit">9</button>
            <button className="calculator__keypad__button sym" type="submit">X</button>
          </div>
          <div className="calculator__keypad__row_3">
            <button className="calculator__keypad__button" type="submit">4</button>
            <button className="calculator__keypad__button" type="submit">5</button>
            <button className="calculator__keypad__button" type="submit">6</button>
            <button className="calculator__keypad__button sym" type="submit">-</button>
          </div>
          <div className="calculator__keypad__row_4">
            <button className="calculator__keypad__button" type="submit">1</button>
            <button className="calculator__keypad__button" type="submit">2</button>
            <button className="calculator__keypad__button" type="submit">3</button>
            <button className="calculator__keypad__button sym" type="submit">+</button>
          </div>
          <div className="calculator__keypad__row_4">
            <button className="calculator__keypad__button fillmore" type="submit">0</button>
            <button className="calculator__keypad__button" type="submit">.</button>
            <button className="calculator__keypad__button sym" type="submit">+</button>
          </div>
        </div>
      </div>

    );
  }
}
