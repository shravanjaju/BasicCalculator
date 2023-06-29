import "./styles.css";
import {useState} from 'react'

export default function App() {
  const [result, setResult] = useState("")

  function setClick(e){
      // setResult(result.concat(e.target.name))
      setResult(result+(e.target.name))
  }

  function setAllClear(){
    setResult(" ")
  }

  function setBackspace(){
    setResult(result.slice(0,-1))
  }

  function getAnswer(){
    try{
      setResult(eval(result).toString())
    }
    catch(err){
      setResult('Error')
    }
  }

  return (
    <>
    <div className="App">
      <form>
        <input type='text' value={result} readOnly/>
      </form>
      <div className='container'>
        <button onClick={setAllClear} id='clear'>Clear</button>
        <button onClick={setBackspace}>C</button>
        <button name='7' onClick={setClick}>7</button>
        <button name='8' onClick={setClick}>8</button>
        <button name='9' onClick={setClick}>9</button>
        <button name='/' onClick={setClick}>&divide;</button>
        <button name='4' onClick={setClick}>4</button>
        <button name='5' onClick={setClick}>5</button>
        <button name='6' onClick={setClick}>6</button>
        <button name='*' onClick={setClick}>&times;</button>
        <button name='1' onClick={setClick}>1</button>
        <button name='2' onClick={setClick}>2</button>
        <button name='3' onClick={setClick}>3</button>
        <button name='-' onClick={setClick}>&ndash;</button>
        <button name='0' onClick={setClick}>0</button>
        <button name='.' onClick={setClick}>.</button>
        <button onClick={getAnswer}>=</button>
        <button name='+' onClick={setClick}>+</button>
      </div>
    </div>
    </>
  );
}