import styles from "./SelectWithDimych.module.css"
import {useState, KeyboardEvent, useEffect} from "react";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectWithDimych = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp")
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
                if(!selectItem){
                    props.onChange(props.items[0].value)
                }

            }

        if (e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }
    }


    const selectItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const [counter, setCounter] = useState(0)


    return (

        <div className={styles.select} onKeyUp={onKeyPressHandler} tabIndex={0}>
            {counter}
            <button onClick={()=>setCounter(counter+1)}>add 1</button>
            <div>
                <span className={styles.main} onClick={toggleItems}>{selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={`${styles.item} ${hoveredItem === i ? styles.selected : ""}`}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>

        </div>
    )
}