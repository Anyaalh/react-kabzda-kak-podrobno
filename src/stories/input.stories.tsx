import {ChangeEvent, useRef, useState} from "react";

export default {
    title: "Uncontrolled input"
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

export const СontrolledInputWithFixidValue = () => <input value="it"/>