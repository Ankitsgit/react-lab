import Chai from './chai' 

function App() {
  

  return (
    // if we want to use the Chai component in the App component with tag <h1>.....</h1>
    // it throw error - Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
    // so we can use the React.Fragment or <></> to wrap the Chai component
    
    // -------------------------Solution 1--------------------------------

    // only single  component can be return in the App component 
    // but we can use multiple component by wrapping them in the React.Fragment or <></>
<>
    <Chai/>  
    <h1> this way of using multiple element in App.jsx   </h1>
  
</>

//  ---------------------------------this throw error----------------
 /*
    <h1> code aur react with vite  </h1>
    <Chai/>
 */
  )
}

export default App
