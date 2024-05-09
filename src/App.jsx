import React from 'react'
import Inc from './Components/Increment/Inc'
import Dec from './Components/Decrement/Dec'
import Result from './Components/Result/Result'
import Reset from './Components/Reset/Reset'
import './App.css'

const App = () => {
  return (
    <>
    <div className="App">
      <Inc/>
      <Result/>
      <Dec/> 
      <div className="App__reset">
      <Reset/>
    </div>
    </div>
  
    
    
    
    
    
    </>
  )
}

export default App