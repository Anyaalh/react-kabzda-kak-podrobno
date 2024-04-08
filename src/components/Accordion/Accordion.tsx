import React from "react";

type AccordionType = {
    title?: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

type AccordionTitleType = {
    accordionTitle?: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}


export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle
                accordionTitle={props.title}
                collapsed={props.collapsed}
                onClick={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={(event)=> props.onClick(!props.collapsed)}>{props.accordionTitle}</h3>
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