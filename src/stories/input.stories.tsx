import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input"
}

export const UncontrolledInput = () => <input/>
export const TrackedValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return (
        <><input onChange={onChangeHandler}/> - {value}</>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <><input ref={inputRef}/>
            <button onClick={onClickHandler}>save</button>
            actual value: {value}</>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={onChangeHandler}/>
    )
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
    )
}
export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>("2")

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    )
}


export const СontrolledInputWithFixidValue = () => <input value="it"/>