/* eslint-disable */
const ClaculatorUI = () => {
    return (
        <div className="calculator"> 
            <div className="calculator__display">0</div>
            <div className="calculator__keypad">
                <div className="calculator__keypad__row_1"> 
                    <button className="calculator__keypad__button">C</button> 
                    <button className="calculator__keypad__button">+/-</button>
                    <button className="calculator__keypad__button">%</button>
                    <button className="calculator__keypad__button sym">+</button>
                </div>
                <div className="calculator__keypad__row_2"> 
                    <button className="calculator__keypad__button">7</button> 
                    <button className="calculator__keypad__button">8</button>
                    <button className="calculator__keypad__button">9</button>
                    <button className="calculator__keypad__button sym">X</button>
                </div>
                <div className="calculator__keypad__row_3"> 
                    <button className="calculator__keypad__button">4</button> 
                    <button className="calculator__keypad__button">5</button>
                    <button className="calculator__keypad__button">6</button>
                    <button className="calculator__keypad__button sym">-</button>
                </div>
                <div className="calculator__keypad__row_4"> 
                    <button className="calculator__keypad__button">1</button> 
                    <button className="calculator__keypad__button">2</button>
                    <button className="calculator__keypad__button">3</button>
                    <button className="calculator__keypad__button sym">+</button>
                </div>
                <div className="calculator__keypad__row_4"> 
                    <button className="calculator__keypad__button fillmore">0</button> 
                    <button className="calculator__keypad__button">.</button>
                    <button className="calculator__keypad__button sym">+</button>
                </div>
            </div>
        </div>

    );
}

export default ClaculatorUI;