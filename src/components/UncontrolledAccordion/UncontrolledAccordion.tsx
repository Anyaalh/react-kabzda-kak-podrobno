import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionType = {
    title?: string
}
type AccordionTitleType = {
    onClick: () => void
    accordionTitle?: string
}

export function UncontrolledAccordion(props: AccordionType) {
    const [state, dispatchState] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle onClick={() => dispatchState({type: "TOGGLE-COLLAPSED"})} accordionTitle={props.title}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.accordionTitle}</h3>)
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
}
