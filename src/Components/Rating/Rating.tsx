import React from "react"

type StarPropsType = {
    value:  boolean
    n:   1 | 2 | 3 | 4 | 5
    setValue: (n:   1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {
    return (
        <span onClick={()=>{props.setValue(props.n)}}>
            <b style={props.value ? {background: 'green'} : {background: 'red'}}>⭐️</b>
        </span>
    )
}

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (n: 1 | 2 | 3 | 4 | 5) => void
}
export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star value={props.value > 0} setValue={props.setValue} n={1}/>
            <Star value={props.value > 1} setValue={props.setValue} n={2}/>
            <Star value={props.value > 2} setValue={props.setValue} n={3}/>
            <Star value={props.value > 3} setValue={props.setValue} n={4}/>
            <Star value={props.value > 4} setValue={props.setValue} n={5}/>
        </div>
    )
//    if (props.value === 1) {
//         return (
//             <div>
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