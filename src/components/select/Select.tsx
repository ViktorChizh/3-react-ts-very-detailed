import React, {FC, useState, KeyboardEvent} from 'react'
import './Select.css'


type OptionType = {
    id: number
    title: string
}

type SelectType = {
    selectId: number
    onClick: (value: number) => void
    options: OptionType[]
    bgc?: string // если необходимо задать цвет, отличный от белого
}

export const Select: FC<SelectType> = React.memo(({selectId, onClick, options, bgc}) => {
    const [showBody, setShowBody] = useState<boolean>(false)
    const [hoveredElement, setHoveredElement] = useState(selectId)

    const KeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key==='ArrowUp'){
            for (let i=0; i<options.length; i++){
                console.log(+options[i].id, hoveredElement)
                if(i!==0 && +options[i].id === hoveredElement){
                    setHoveredElement(prev => prev-1)
                    onClick(hoveredElement-1)
                    break
                }
            }
        }
        else if(e.key==='ArrowDown'){
            for (let i=0; i<options.length; i++){
                if(i!==options.length-1 && +options[i].id === hoveredElement){
                    setHoveredElement(prev => prev+1)
                    onClick(hoveredElement+1)
                    break
                }
            }
        }
        else if(e.key==='Enter'){
            onClick(hoveredElement)
            setShowBody(!showBody)
        }
        else if(e.key==='Escape'){
            setShowBody(false)
        }
    }

    const ShowBodyHandler = () => {
        setHoveredElement(selectId)
        setShowBody(!showBody)
    }
    const onClickHandler = (id: number) => {
        onClick(id)
        setShowBody(!showBody)
        setHoveredElement(selectId)
    }
    const onHoveredHandler= (id: number) => {
        setHoveredElement(id)
    }

    return (
        <div>
            <div className="select" style={{backgroundColor: bgc ? bgc : 'white'}} onKeyUp={KeyHandler} tabIndex={0}>
                <span>{options.filter(i => i.id === selectId)[0].title}</span>
                <div className={!showBody ? 'arrowDown' : 'arrowUp'} onClick={ShowBodyHandler} ></div>
            </div>
            {showBody && <div className="selectBody" style={{backgroundColor: bgc ? bgc : 'white'}}>
                {options.map(i =>
                    <div key={i.id}
                         onKeyUp={KeyHandler} tabIndex={0}
                         onMouseEnter={()=> onHoveredHandler(i.id)}
                         onClick={() => onClickHandler(i.id)}
                         className={i.id===hoveredElement ? 'item' : ''}>
                        {i.title}
                    </div>)}
            </div>}
        </div>
    )
})