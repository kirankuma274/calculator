function Keypad(props)
{
    return(
        <div className='keypad'>
            <div className="row">
                <button className="digit" onClick={()=>{props.handle("7")}}>7</button>
                <button className="digit" onClick={()=>{props.handle("8")}}>8</button>
                <button className="digit" onClick={()=>{props.handle("9")}}>9</button>
                <button className="operator" onClick={()=>{props.handle("/")}}>/</button>

            </div>
            <div className="row">
                <button className="digit" onClick={()=>{props.handle("4")}}>4</button>
                <button className="digit" onClick={()=>{props.handle("5")}}>5</button>
                <button className="digit" onClick={()=>{props.handle("6")}}>6</button>
                <button className="operator" onClick={()=>{props.handle("*")}}>*</button>

            </div>
            <div className="row">
                <button className="digit" onClick={()=>{props.handle("1")}}>1</button>
                <button className="digit" onClick={()=>{props.handle("2")}}>2</button>
                <button className="digit" onClick={()=>{props.handle("3")}}>3</button>
                <button className="operator" onClick={()=>{props.handle("-")}}>-</button>

            </div>

            <div className="row">
                <button className="digit" onClick={()=>{props.handle("0")}}>0</button>
                <button className="operator-fun" onClick={()=>{props.calc()}}>=</button>
                <button className="operator-fun" onClick={()=>{props.clear()}}>Clear</button>
                <button className="operator" onClick={()=>{props.handle("+")}}>+</button>

            </div>
        </div>
    )
}
export default Keypad