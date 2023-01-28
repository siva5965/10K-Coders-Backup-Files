import React from 'react'
import { useState } from 'react'

const App1 = () => {
    const [input, setInput] = useState("")
    const [result,setResult]= useState(0)
    const handler = e => {
        setInput(e.target.value);
    }
    return (
        <div>
            <center>
                <input type="tel" value={input} name="input" onChange={handler} />
                <br />
                <button type="button" className="btn btn-success" onClick={()=> setResult(eval(input))}>Result</button>
                <h4>Result is : {result}</h4>

                {/* <button onClick={()=> setInput(input+'+')}>+</button>
                <button onClick={()=> setInput(input+'-')}>-</button>
                <button onClick={()=> setInput(input+'*')}>*</button>
                <button onClick={()=> setInput(input+'/')}>/</button>
                <button onClick={()=> setInput('')}>clr</button> <br />

                <button onClick={()=> setInput(input+'1')}>1</button>
                <button onClick={()=> setInput(input+'2')}>2</button>
                <button onClick={()=> setInput(input+'3')}>3</button> <br />
                <button onClick={()=> setInput(input+'4')}>4</button>
                <button onClick={()=> setInput(input+'5')}>5</button> 

                <button onClick={()=> setInput(input+'6')}>6</button> <br />
                <button onClick={()=> setInput(input+'7')}>7</button>
                <button onClick={()=> setInput(input+'8')}>8</button>
                <button onClick={()=> setInput(input+'9')}>9</button> <br />
                <button onClick={()=> setInput(input+'0')}>0</button>
                <button onClick={()=> setInput(input+'.')}>.</button>
                <button onClick={()=> setResult(eval(input))}>=</button> */}

                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'9')}>9</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'8')}>8</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'7')}>7</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'+')}>+</button>
                <br />
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'6')}>6</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'5')}>5</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'4')}>4</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'-')}>-</button>
                <br />
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'3')}>3</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'2')}>2</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'1')}>1</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'*')}>*</button>
                <br />
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'0')}>0</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'.')}>.</button>
                <button type="button" className="btn btn-secondary" onClick={()=> setInput(input+'/')}>/</button>
                <button type="button" className="btn btn-info" onClick={()=> setResult(eval(input))}>=</button>
                <br />
                <button type='button' className="btn btn-danger" onClick={()=> setInput('')}>Clear</button>


                


            </center>
        </div>
    )
}

export default App1
