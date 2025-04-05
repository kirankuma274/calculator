import './App.css'
import Keypad from './keys'
import { useState } from 'react'
function App(){


let [input,updateinput]=useState("")

function handleclick(value){
      updateinput(input+value)
}

function handleclear(){
  updateinput("")
}

function handlecalculation(){
      let result=eval(input)
      updateinput(result)
}


  return(
    <>
    <div className='container'>
        <h1>Calculator</h1>
        <div className='calculator'>
              <input type='text' className='output' value={input} readOnly />
              <Keypad handle={handleclick} clear={handleclear}  calc={handlecalculation} />
          </div>   
     </div>
       
    </>
  )

}
export default App