import React from 'react'

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
  return (
    <>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody />}
    </>
  )
}

type AccordionTitlePropsType = {
  title: string
}


function AccordionTitle(props: AccordionTitlePropsType) {
  return <>
    <h2>{props.title}</h2>
  </>
}
function AccordionBody() {
  return <>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </>
}
