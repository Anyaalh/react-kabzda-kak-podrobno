import React from "react";

type AccordionType = {
    title?: string
    collapsed:boolean
}

type AccordionTitleType = {
    accordionTitle?: string
}


export function Accordion(props: AccordionType) {
    if (props.collapsed){
        return <AccordionTitle accordionTitle={props.title}/>
    } else {
        return (
            <div>
                <AccordionTitle accordionTitle={props.title}/>
                <AccordionBody/>
            </div>
        )
    }
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