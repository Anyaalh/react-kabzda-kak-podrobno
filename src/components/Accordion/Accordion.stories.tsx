import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'


import { Accordion } from './Accordion';
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const onChangehandler = action('obChange')

export const CollapsedAccordion = () => {
    return(
        <Accordion
            collapsed={true}
            title={"Collapsed Accordion"}
            setCollapsed={onChangehandler}/>
    )
}
export const OpenedAccordion = () => {
    return(
        <Accordion
            collapsed={false}
            title={"Opened Accordion"}
            setCollapsed={onChangehandler}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return(
        <Accordion
            collapsed={collapsed}
            title={"Demo Accordion"}
            setCollapsed={()=>{
                setCollapsed(!collapsed)
            }}/>
    )
}

