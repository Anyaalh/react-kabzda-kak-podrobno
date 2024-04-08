import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";
import {useState} from "react";

export default {
    title: 'OnOff',
    component: OnOff
};

const callback = action("on or off clicked")

export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OffMode = () => <OnOff on={false} setOn={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <OnOff on={value} setOn={setValue}/>
    )
}

