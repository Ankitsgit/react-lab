import { useState } from 'react'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
      <Card topics={["React", "JS", "CSS"]} />

    </>
  )
}

export default App
