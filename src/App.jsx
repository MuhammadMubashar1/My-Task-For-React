import { useState } from 'react'
import './App.css'
function App() {

  function checkPrime(number){
    let isPrime=true;
    if(number<=1) return false;
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
          isPrime = false;
          break;
      }
    }
    if(isPrime) return true;
    else return false;
  }

  const [count,setCount]= useState(0);
  const isCountPrimeNumber = checkPrime(count);

  const handelInputChange = (event)=>{
  if(event.target.value < 0 ){
    setCount(0);
  }
  else{
    setCount(event.target.value);
  }
  }

  const increment =()=>{
    setCount((prevCount)=>parseInt(prevCount) + 1);
  }
  
  const decrement =()=>{
    setCount((prevCount)=>parseInt(prevCount) - 1);
  } 

  return (
  
  <>
    <h1>Counter App</h1>
    <label htmlFor="" style={{color : isCountPrimeNumber ? 'red' : 'white'}}>{count}</label>
    <input type="text"  onChange={handelInputChange} value={count}/>
    <button className='btn' onClick={increment}>+</button>
    <button className='' disabled={count===0} onClick={decrement}>-</button>
  </>
  )
}

export default App
