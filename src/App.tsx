import React from 'react'
import './App.css'
import { Accordion } from './Components/Accordion/Accordion'
import { Rating } from './Components/Rating/Rating'

function App() {
  return (
    <div>
      <h1>HELLO!</h1>
      <Rating value={2}/>
      <Accordion title={' SUPER '} collapsed={false} />
    </div>
  );
}

export default App