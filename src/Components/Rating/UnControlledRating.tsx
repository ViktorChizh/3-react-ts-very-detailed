import React, {useState} from 'react'
import {UnControlledAccordion} from '../Accordion/UnControlledAccordion';

type UnControlledStarPropsType = {
    value: boolean
}

const Star = (props: UnControlledStarPropsType) => {
    return (
        <span>
            {/* { props.value && <b>⭐️</b>} */}
            { props.value && <b style={{background: 'green'}}>⭐️</b> }
            { !props.value && <b style={{background: 'red'}}>⭐️</b> }
        </span>
    )
}

type UnControlledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}
export function UnControlledRating(props: UnControlledRatingPropsType) {
    const [star1, setStar1] = useState(false)
    const [star2, setStar2] = useState(false)
    const [star3, setStar3] = useState(false)
    const [star4, setStar4] = useState(false)
    const [star5, setStar5] = useState(false)
    return (
        <div>
            <Star value={star1}/>
            <button style={{margin:'0 2px', width: '40px'}} onClick={() => setStar1(!star1)}>{!star1 ? 'on1' : 'off1'}</button>
            <Star value={star2}/>
            <button style={{margin:'0 2px', width: '40px'}}  onClick={() => setStar2(!star2)}>{!star2 ? 'on2' : 'off2'}</button>
            <Star value={star3}/>
            <button style={{margin:'0 2px', width: '40px'}}  onClick={() => setStar3(!star3)}>{!star3 ? 'on3' : 'off3'}</button>
            <Star value={star4}/>
            <button style={{margin:'0 2px', width: '40px'}}  onClick={() => setStar4(!star4)}>{!star4 ? 'on4' : 'off4'}</button>
            <Star value={star5}/>
            <button style={{margin:'0 2px', width: '40px'}}  onClick={() => setStar5(!star5)}>{!star5 ? 'on5' : 'off5'}</button>
        </div>
    )
//    if (props.value === 1) {
//         return (
//             <div3
//                 <Star value={true} />
//                 <Star value={false} />
//                 <Star value={false} />
//                 <Star value={false} />
//                 <Star value={false} />
//             </div>
//         )
//     }
//     if (props.value === 2) {
//         return (
//             <div>
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={false} />
//                 <Star value={false} />
//                 <Star value={false} />
//             </div>
//         )
//     }
//     if (props.value === 3) {
//         return (
//             <div>
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={false} />
//                 <Star value={false} />
//             </div>
//         )
//     }
//     if (props.value === 4) {
//         return (
//             <div>
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={false} />
//             </div>
//         )
//     }
//     if (props.value === 5) {
//         return (
//             <div>
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={true} />
//                 <Star value={true} />
//             </div>
//         )
//     }
//     return (
//         <div>
//             <Star value={false} />
//             <Star value={false} />
//             <Star value={false} />
//             <Star value={false} />
//             <Star value={false} />
//         </div>
//     )
}