import React, {useState} from "react";

type AccordionType = {
    title?: string

}

type AccordionTitleType = {
    accordionTitle?: string
}



export function UncontrolledAccordion(props: AccordionType) {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle accordionTitle={props.title}/>
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.accordionTitle}</h3>
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