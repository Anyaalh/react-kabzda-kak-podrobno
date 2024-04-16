import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'


import { Accordion } from './Accordion';
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};

const onChangehandler = action('onChange')
const onClickCallback = action("some item was clicked")

export const CollapsedAccordion = () => {
    return(
        <Accordion
            onClick={onClickCallback}
            items={[]}
            collapsed={true}
            title={"Collapsed Accordion"}
            setCollapsed={onChangehandler}/>
    )
}
export const OpenedAccordion = () => {
    return(
        <Accordion
            onClick={onClickCallback}
            items={[ {title: "ann", value: 1}, {title: "Ann", value: 2}, {title: "Anya", value: 3}]}
            collapsed={false}
            title={"Opened Accordion"}
            setCollapsed={onChangehandler}/>
    )
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return(
        <Accordion
            onClick={onClickCallback}
            items={[ {title: "ann", value: 1}, {title: "Ann", value: 2}, {title: "Anya", value: 3}]}
            collapsed={collapsed}
            title={"Demo Accordion"}
            setCollapsed={()=>{
                setCollapsed(!collapsed)
            }}/>
    )
}

