import React, {useState} from 'react'
import { Star, UnControlledRating } from './UnControlledRating';

export default {
    title:"UnControlledRating",
    component: UnControlledRating
}

export function UnControlledRatingDemo0() {
    const [star, setStar] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    return (
        <div>
            <button style={{margin: '0 2px'}} onClick={() => setStar(0)}>0</button>
            <Star value={star > 0}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star > 1}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(2)}>2</button>
            <Star value={star > 2}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(3)}>3</button>
            <Star value={star > 3}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(4)}>4</button>
            <Star value={star > 4}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(5)}>5</button>
        </div>
    )
}

export function UnControlledRatingDemo1() {
    const [star, setStar] = useState<0 | 1 | 2 | 3 | 4 | 5>(1)
    return (
        <div>
            <button style={{margin: '0 2px'}} onClick={() => setStar(0)}>0</button>
            <Star value={star > 0}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star > 1}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(2)}>2</button>
            <Star value={star > 2}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(3)}>3</button>
            <Star value={star > 3}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(4)}>4</button>
            <Star value={star > 4}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(5)}>5</button>
        </div>
    )
}

export function UnControlledRatingDemo2() {
    const [star, setStar] = useState<0 | 1 | 2 | 3 | 4 | 5>(2)
    return (
        <div>
            <button style={{margin: '0 2px'}} onClick={() => setStar(0)}>0</button>
            <Star value={star > 0}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star > 1}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(2)}>2</button>
            <Star value={star > 2}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(3)}>3</button>
            <Star value={star > 3}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(4)}>4</button>
            <Star value={star > 4}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(5)}>5</button>
        </div>
    )
}

export function UnControlledRatingDemo3() {
    const [star, setStar] = useState<0 | 1 | 2 | 3 | 4 | 5>(3)
    return (
        <div>
            <button style={{margin: '0 2px'}} onClick={() => setStar(0)}>0</button>
            <Star value={star > 0}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star > 1}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(2)}>2</button>
            <Star value={star > 2}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(3)}>3</button>
            <Star value={star > 3}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(4)}>4</button>
            <Star value={star > 4}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(5)}>5</button>
        </div>
    )
}

export function UnControlledRatingDemo4() {
    const [star, setStar] = useState<0 | 1 | 2 | 3 | 4 | 5>(4)
    return (
        <div>
            <button style={{margin: '0 2px'}} onClick={() => setStar(0)}>0</button>
            <Star value={star > 0}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star > 1}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(2)}>2</button>
            <Star value={star > 2}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(3)}>3</button>
            <Star value={star > 3}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(4)}>4</button>
            <Star value={star > 4}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(5)}>5</button>
        </div>
    )
}

export function UnControlledRatingDemo5() {
    const [star, setStar] = useState<0 | 1 | 2 | 3 | 4 | 5>(5)
    return (
        <div>
            <button style={{margin: '0 2px'}} onClick={() => setStar(0)}>0</button>
            <Star value={star > 0}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star > 1}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(2)}>2</button>
            <Star value={star > 2}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(3)}>3</button>
            <Star value={star > 3}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(4)}>4</button>
            <Star value={star > 4}/>
            <button style={{margin: '0 2px'}} onClick={() => setStar(5)}>5</button>
        </div>
    )
}