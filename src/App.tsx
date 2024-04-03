import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PageTitleType = {
    title: string
}

function App() {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [on, setOn] = useState(false)


    return (
        <div className="App">
            {/*<PageTitle title={"This is APP-component"}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion title={"Menu"} collapsed/>*/}
            {/*<Accordion title={"Users"} collapsed={false}/>*/}
            {/*<Accordion2 title={"acc"} collapsed={false}/>*/}


            {/*<UncontrolledAccordion title={"Users"}/>*/}
            {/*<UncontrolledRating />*/}


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Accordion collapsed={collapsed} title={"Acc"} setCollapsed={setCollapsed}/>*/}
            {/* <OnOff on={on} setOn={setOn}/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/> {on.toString()}*/}
        </div>
    );
}


function PageTitle(props: PageTitleType) {
    return (
        <>{props.title}</>
    )
}


export default App;
