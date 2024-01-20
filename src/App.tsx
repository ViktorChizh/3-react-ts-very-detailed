import React, {useState} from 'react'
import './App.css'
import { Accordion } from './components/accordion/Accordion'
import { Rating } from './components/rating/Rating'
import {UnControlledAccordion} from './components/accordion/UnControlledAccordion';
import {UnControlledRating} from './components/rating/UnControlledRating';
import {Select} from './components/select/Select';

export type ItemType = {
    id: number
    title: string
}

export type baseItemsType = ItemType[]

export const baseItems: baseItemsType = [
    {id: 1, title:'Viktor'},
    {id: 2, title: 'Maria'},
    {id: 3, title: 'Agnia'}
]

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const [value, setValue] = useState< 0 | 1 | 2 | 3 | 4 | 5 >(0)
    const onClickItem = (id: number) => {
        console.log('id:  ', id)
    }
    const [selectId, setSelectId] = useState<number>(1)
  return (
    <div>
      <h1>HELLO!</h1>
        <span>controlled Rating</span>
      <Rating value={value} setValue={setValue}/>
        <span>uncontrolled Rating</span>
      <UnControlledRating />

      <Accordion
          title={' ControlledSUPER '}
          collapsed={collapsed}
          setCollapsed = {setCollapsed}
          items={baseItems}
          onClick={onClickItem}
      />
      <UnControlledAccordion title={'UnControlledSUPER'} />

        <Select selectId={selectId} onClick={setSelectId} options={baseItems}/>
    </div>
  );
}

export default App