import React from 'react'
import {baseItemsType} from '../../App';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    items: baseItemsType
    onClick: (id: number) => void
    setCollapsed: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <>
            <AccordionTitle title={props.title} onClick={() => props.setCollapsed(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <>
        <h2 onClick={props.onClick} style={{cursor: 'pointer'}}>{props.title}</h2>
    </>
}

type AccordionBodyPropsType = {
    items: baseItemsType
    onClick: (id: number) => void
}

function AccordionBody({items, onClick}: AccordionBodyPropsType) {
    return <>
        {items.map(i => <li key={i.id} onClick={()=>onClick(i.id)}>{i.title}</li>)}
    </>
}
