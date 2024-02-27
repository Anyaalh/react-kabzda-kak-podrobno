import React from "react";

type StarType = {
    selected: boolean
}
type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingType) {
    if (props.value === 1){
        return (
            <div>
                <Star selected/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 2){
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 3){
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 4){
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected={false}/>
            </div>
        )
    }
    if (props.value === 5){
        return (
            <div>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected/>
                <Star selected/>
            </div>
        )
    }
    else {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }

}

function Star(props: StarType) {
    if (props.selected) {
        return <span><b> star</b></span>
    } else {
        return <span> star</span>
    }

}