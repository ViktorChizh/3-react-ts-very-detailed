import React, {useState} from 'react'
import {Select} from './Select'
import {baseItems} from '../../App';

export default {
    title: 'Select',
    component: Select
}

export const SelectDemo = () => {
    const [selectId, setSelectId] = useState(1)
    return <Select selectId={selectId} onClick={setSelectId} options={baseItems} bgc={'mintcream'}/>
}