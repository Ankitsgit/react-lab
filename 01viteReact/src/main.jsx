/*
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// ReactElement and anotherElement are both object but anotherElement is working 
// because ReactElement due to synrax error


const anotherUser = "chai aur react"

// creating react element using createElement method 
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)
// */


// /*
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement// this is a evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)
// */


// /* 
//---------------------jsx code ------------------------
function MyApp(){
  const username= "chai aur react"
  //return ke  andar hm evaluted expression hi likh sakte hai or uske ke liye {} use karte hai
  // hm directly javascript code nhi likh sakte hai return ke andar
  return ( 
      <div>
          <h1>Custom App | chai{username}</h1>
      </div>
  )
}


// */


