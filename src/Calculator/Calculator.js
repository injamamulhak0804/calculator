import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [result, setResult] = useState([0]);
    const [number, setNumber] = useState([]);
    const [show, setShow] = useState([])

    const arr = [7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "+", ".", 0, "-"]

    const handleClick = (no) => {
        const num = [...number, no]
        setNumber(num)
        setShow(num)
    }

    const handleSubmit = () => {
        const res = number.join("")
        const op = eval(res)
        setResult(op)
    }

    const handleClear = () => {
        setShow()
        setResult(0)
        setNumber([])
    }

    return (
        <>
            <div>
                <header className='header'>Calculator</header>
                <div className="wrapper">
                    <div className="outer-box">
                        <div className="result">
                            <p className='show'>{show}</p>
                            <p className='res'>{result}</p>
                        </div>
                        <div className="btns">
                            {
                                arr.map((e) => {
                                    return (
                                        <button key={e} onClick={() => handleClick(e)} className="btn-calc">{e}</button>
                                    )
                                })
                            }
                            <button onClick={handleSubmit} className="btn-calc op">=</button>
                        </div>
                        <div className="clear">
                            <button onClick={handleClear} className='clearbtn op' type="button">Clear</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator