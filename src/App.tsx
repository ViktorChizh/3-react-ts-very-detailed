import React from 'react'
import './App.css'
import { Accordion } from './Components/Accordion/Accordion'
import { Rating } from './Components/Rating/Rating'
import {UnControlledAccordion} from './Components/Accordion/UnControlledAccordion';
import {UnControlledRating} from './Components/Rating/UnControlledRating';

function App() {
  return (
    <div>
      <h1>HELLO!</h1>
      <Rating value={3}/>
      <UnControlledRating />
      <Accordion title={' SUPER '} collapsed={false} />
      <UnControlledAccordion title={'UnControlledSUPER'} />
    </div>
  );
}

export default App