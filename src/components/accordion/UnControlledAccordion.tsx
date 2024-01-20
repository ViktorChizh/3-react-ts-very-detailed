import React, {useState} from 'react'

type UnControlledAccordionPropsType = {
  title: string
  // collapsed: boolean
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <>
      <div style={{display:'inline-block'}}>
        <AccordionTitle title={props.title}/>
      </div>

        <button style={{display:'inline-block', marginLeft:'10px'}} onClick={() => setCollapsed(!collapsed)}>{!collapsed ? 'OPEN' : 'CLOSE'}</button>

      {collapsed && <AccordionBody />}
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
      {Array(5).fill(0).map((_,i) => <li>{i+1}</li>)}
      {/*<li>1</li>*/}
      {/*<li>2</li>*/}
      {/*<li>3</li>*/}
      {/*<li>4</li>*/}
      {/*<li>5</li>*/}
    </ul>
  </>
}
