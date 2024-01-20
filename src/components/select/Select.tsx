import React, {FC, useState} from 'react'
import './Select.css'


type OptionType = {
    id: number
    title: string
}

type SelectType = {
    selectId: number
    onClick: (value: number) => void
    options: OptionType[]
}

export const Select: FC<SelectType> = ({selectId, onClick, options}) => {
    const [showBody, setShowBody] = useState<boolean>(true)


    const onClickHandler = (id: number)=> {
        onClick(id)
        setShowBody(!showBody)
    }

    return (
        <div>
            <div className='select'>
                <span>{options.filter(i => i.id === selectId)[0].title}</span>
                <div className={!showBody ? 'arrowDown' : 'arrowUp'} onClick={() => setShowBody(!showBody)}></div>
            </div>
            {showBody && <div className='selectBody'>
                {options.map(i => <div key={i.id} onClick={()=>onClickHandler(i.id)}>{i.title}</div>)}
            </div>}
        </div>
    )
} 