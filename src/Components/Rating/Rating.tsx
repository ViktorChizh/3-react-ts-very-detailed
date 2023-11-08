import React from "react"


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
export function Rating(props: RatingPropsType) {
    if (props.value === 1) {
        return (
            <div>
                <Star value={true} />
                <Star value={false} />
                <Star value={false} />
                <Star value={false} />
                <Star value={false} />
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star value={true} />
                <Star value={true} />
                <Star value={false} />
                <Star value={false} />
                <Star value={false} />
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star value={true} />
                <Star value={true} />
                <Star value={true} />
                <Star value={false} />
                <Star value={false} />
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star value={true} />
                <Star value={true} />
                <Star value={true} />
                <Star value={true} />
                <Star value={false} />
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star value={true} />
                <Star value={true} />
                <Star value={true} />
                <Star value={true} />
                <Star value={true} />
            </div>
        )
    }
    return (
        <div>
            <Star value={false} />
            <Star value={false} />
            <Star value={false} />
            <Star value={false} />
            <Star value={false} />
        </div>
    )
}

type StarPropsType = {
    value: boolean
}

const Star = (props: StarPropsType) => {
    return (
        <span>
            {/* { props.value && <b>⭐️</b>} */}
            { props.value && <b style={{background: 'green'}}>⭐️</b> }
            { !props.value && <b style={{background: 'red'}}>⭐️</b> }
        </span>
    )
}