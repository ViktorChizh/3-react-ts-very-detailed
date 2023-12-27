import React, {useState} from 'react'
import './App.css'
import { Accordion } from './Components/Accordion/Accordion'
import { Rating } from './Components/Rating/Rating'
import {UnControlledAccordion} from './Components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './Components/Rating/UnControlledRating';

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const [value, setValue] = useState< 0 | 1 | 2 | 3 | 4 | 5 >(0)
  return (
    <div>
      <h1>HELLO!</h1>
      <Rating value={value} setValue={setValue}/>
      <UnControlledRating />
      <Accordion title={' SUPER '} collapsed={collapsed} setCollapsed = {setCollapsed}/>
      <UnControlledAccordion title={'UnControlledSUPER'} />
    </div>
  );
}

export default App