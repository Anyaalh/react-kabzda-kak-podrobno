import React from "react";

type AccordionType = {
    title?: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: InputType[]
    onClick: (value: any)=>void
}

type AccordionTitleType = {
    accordionTitle?: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

type InputType = {
    title: string
    value: any
}


type AccordionBodyType = {
    items: InputType[]
    onClick: (value: any)=>void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle
                accordionTitle={props.title}
                collapsed={props.collapsed}
                onClick={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={(event)=> props.onClick(!props.collapsed)}>{props.accordionTitle}</h3>
    )
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i, index )=> <li onClick={ ()=> props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    )
}