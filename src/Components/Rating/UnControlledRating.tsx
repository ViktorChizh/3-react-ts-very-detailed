import React, {useState} from 'react'

type UnControlledStarPropsType = {
    value: boolean
}

export const Star = (props: UnControlledStarPropsType) => {
    return (
        <span>
            {/* { props.value && <b>⭐️</b>} */}
            {/*{props.value && <b style={{background: 'green'}}>⭐️</b>}*/}
            {/*{!props.value && <b style={{background: 'red'}}>⭐️</b>}*/}
            <b style={props.value ? {background: 'green'} : {background: 'red'}}>⭐️</b>
        </span>
    )
}

type UnControlledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}
export function UnControlledRating(props: UnControlledRatingPropsType) {
    const [star, setStar] = useState(0)
    return (
        <div>
            <Star value={star>0}/>
            <button style={{margin:'0 2px'}} onClick={() => setStar(1)}>1</button>
            <Star value={star>1}/>
            <button style={{margin:'0 2px'}}  onClick={() => setStar(2)}>2</button>
            <Star value={star>2}/>
            <button style={{margin:'0 2px'}}  onClick={() => setStar(3)}>3</button>
            <Star value={star>3}/>
            <button style={{margin:'0 2px'}}  onClick={() => setStar(4)}>4</button>
            <Star value={star>4}/>
            <button style={{margin:'0 2px'}}  onClick={() => setStar(5)}>5</button>
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