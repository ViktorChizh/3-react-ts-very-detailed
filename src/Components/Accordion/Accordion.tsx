import React from 'react'

type AccordionPropsType = {
  title: string
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
  return (
    <>
      <AccordionTitle title={props.title} onClick ={()=>props.setCollapsed(!props.collapsed)} />
      {!props.collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <>
    <h2 onClick={props.onClick} style={{cursor:'pointer'}}>{props.title}</h2>
  </>
}
function AccordionBody() {
  return <>
    <ul>
      {Array(5).fill(0).map((_,i) => <li>{i+1}</li>)}
      {/*<li>1</li>*/}
      {/*<li>2</li>*/}
      {/*<li>3</li>*/}
      {/*<li>4</li>*/}
      {/*<li>5</li>*/}
    </ul>
  </>
}
