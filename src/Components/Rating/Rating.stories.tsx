import React, {useState} from 'react'
import {Rating, Star} from './Rating'

export default {
    component: Rating
}

export const Rating0 = () => {return <Rating value={0} setValue={x=>x}/>}
export const Rating1 = () => {return <Rating value={1} setValue={x=>x}/>}
export const Rating2 = () => {return <Rating value={2} setValue={x=>x}/>}
export const Rating3 = () => {return <Rating value={3} setValue={x=>x}/>}
export const Rating4 = () => {return <Rating value={4} setValue={x=>x}/>}
export const Rating5 = () => {return <Rating value={5} setValue={x=>x}/>}

export function RatingDemo() {
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    return (
        <div>
            <Star value={value > 0} setValue={() => setValue(1)}/>
            <Star value={value > 1} setValue={() => setValue(2)}/>
            <Star value={value > 2} setValue={() => setValue(3)}/>
            <Star value={value > 3} setValue={() => setValue(4)}/>
            <Star value={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}