import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  let[counter,setCounter]=useState(15)

  const addValue = () => {
   // counter = counter + 1
    console.log('counter value:', counter)
    if(counter<20){
    // setCounter(counter+1)

    // ----if this condition arises------
     /*
     setCounter(counter+1)
     setCounter(counter+1)
     setCounter(counter+1)
     setCounter(counter+1)
    // }  
     // then there is no change because react send ui updates 
     // in batches of same methhod
    //  */

     //---agar esa koi case arise hota hai ----
    //  /* 
     //----using callbacks 

     setCounter(prevCounter => counter +1)
     setCounter(prevCounter => counter +1)
     setCounter(prevCounter => counter +1)
     setCounter(prevCounter => counter +1)
    }

    //  */


    else{
      setCounter(counter=20)
      // alert('counter value is greater than 20')
      }

  }

  const removeValue = () => {
    // counter = counter -1
     console.log('counter value:', counter)
     if(counter>0){
     setCounter(counter-1)
     }else{
       setCounter(counter=0)
     }
 
   }


  return (
    <>
      <h1>chai aur react </h1>
      <h2>counter value:{counter}</h2>
      <button
      onClick={addValue} >Add value</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
