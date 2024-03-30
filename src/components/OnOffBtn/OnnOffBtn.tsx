import s from "./OnOffBtn.module.css"
import {useState} from "react";

export const OnnOffBtn = () => {

    let [on, setOn] = useState(false)
    // let[onCircle, setOnCircle] = useState(false)
    // let[offCircle, setOffCircle] = useState(true)


    function changeToOn() {
        setOn(true)
        // setOnCircle(true)
        // setOffCircle(false)
    }

    function changeToOff() {
        setOn(false)
        // setOffCircle(true)
        // setOnCircle(false)
    }

    return (

        <div>
            <button onClick={changeToOn}>on</button>
            <div className={on ? s.onCircle: s.offCircle}></div>
            <button onClick={changeToOff}>off</button>
            <div className={on ? s.offCircle : s.onCircle}></div>
            <div className={on ? s.on : s.off}></div>
        </div>
    )
}