import React from 'react'
import './App.css'

function App() {
  return (
    <div>
      <h1>HELLO!</h1>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

export default App;

const Star = () => {
  return (
    <div>
      ⭐️
    </div>
  )
}