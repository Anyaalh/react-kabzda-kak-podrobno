import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: "select",
    component: Select
}


export const MySelection = () => {
    const [value, setValue] = useState("choose")

    let items = [
        {title: "Minsk", value: "1"},
        {title: "Vitebsk", value: "2"},
        {title: "Orsha", value: "3"},
        {title: "Orehovsk", value: "4"},
    ]

    const onClickHandler = (value: string) => {
        const result = items.find((item) => item.value === value);
        if(result){
            setValue(result.title)
        }
    }

    return (
        <Select value={value} onClick={onClickHandler} items={items}/>
    )
}