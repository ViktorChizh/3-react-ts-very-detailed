import React, {useState} from 'react'
import { Star} from './Rating'

export default {
    component: Star
}
export const redStar = () => <Star value={false} setValue={()=>{}}/>
export const greenStar = () => <Star value={true} setValue={()=>{}}/>

export function StarDemo() {
const [value, setValue] = useState<boolean>(true)
    return (
        <Star value={value} setValue={()=>setValue(!value)}/>
    )
}