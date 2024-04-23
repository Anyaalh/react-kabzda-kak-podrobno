import {SelectWithDimych} from "./SelectWithDimych";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: "Select With Dimych",
    component: SelectWithDimych
}
export const WithValue = () => {
    const [value, setValue] = useState("2")

    return (
        <SelectWithDimych value={value}
                          onChange={setValue}
                          items={[
                              {value: "1", title: "Minsk"},
                              {value: "2", title: "Moscow"},
                              {value: "3", title: "Kiev"},
                          ]}/>
    )
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null)
    return (
        <SelectWithDimych onChange={setValue}
                          value={value}
                          items={[
                              {value: "1", title: "Minsk"},
                              {value: "2", title: "Moscow"},
                              {value: "3", title: "Kiev"},
                          ]}/>
    )
}