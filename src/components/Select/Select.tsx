import {useState} from "react";
import style from "./Select.module.css"

export type ItemType = {
    title: string
    value: any
}

type SelectType = {
    value: string
    onClick: (value: string) => void
    items: ItemType[]
}

export function Select(props: SelectType) {
    let [collapsed, setCollapsed] = useState(false)
    let onClickHandler = (value: string) => {
        props.onClick(value)
        setCollapsed(false)
        console.log(props.value)
    }

    return (
        <div>
            <div className={collapsed ? `${style.select} ${style.active}` : style.select} onClick={() => setCollapsed(!collapsed)}>{props.value}</div>
            <div className={collapsed ? style.list : ""}>
                {collapsed && props.items.map(i => <div
                                                        onClick={() => onClickHandler(i.value)}>{i.title}</div>)}
            </div>

        </div>


    )
}