import React, {useState} from "react";

type AccordionType = {
    title?: string

}

type AccordionTitleType = {
    onClick: () => void
    accordionTitle?: string
}


export function UncontrolledAccordion(props: AccordionType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle onClick={()=>setCollapsed(!collapsed)} accordionTitle={props.title}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={()=>props.onClick()}>{props.accordionTitle}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}