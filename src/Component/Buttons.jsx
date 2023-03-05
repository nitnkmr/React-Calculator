import React from 'react'

const Buttons = ({Calc,getResult,resetsfunc}) => {
  return (
    <div className='button'>
        <div className="row">
            <div className="numbers zero" onClick={resetsfunc}>AC</div>
            <div className="numbers" onClick={()=>Calc(".")}>.</div>
            <div className="numbers" onClick={()=>Calc("*")}>x</div>

        </div>
        <div className="row">
            <div className="numbers" onClick={()=>Calc("1")}>1</div>
            <div className="numbers" onClick={()=>Calc("2")}>2</div>
            <div className="numbers" onClick={()=>Calc("3")}>3</div>
            <div className="numbers" onClick={()=>Calc("+")}>+</div>
        </div>
        <div className="row">
            <div className="numbers" onClick={()=>Calc("4")}>4</div>
            <div className="numbers" onClick={()=>Calc("5")}>5</div>
            <div className="numbers" onClick={()=>Calc("6")}>6</div>
            <div className="numbers" onClick={()=>Calc("/")}>/</div>
        </div>
        <div className="row">
            <div className="numbers" onClick={()=>Calc("7")}>7</div>
            <div className="numbers" onClick={()=>Calc("8")}>8</div>
            <div className="numbers" onClick={()=>Calc("9")}>9</div>
            <div className="numbers" onClick={()=>Calc("-")}>-</div>
        </div>
        <div className="row">
            <div className="numbers zero" onClick={()=>Calc("0")}>0</div>
            <div className="numbers zero zero1" onClick={()=>getResult()}>=</div>
        </div>
    </div>
  )
}

export default Buttons