import React from 'react';
import './App.css';
import {Accordion, Accordion2} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnnOffBtn} from "./components/OnOffBtn/OnnOffBtn";
import {OnOff} from "./components/OnnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

type PageTitleType = {
    title: string
}

function App() {
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

            {/*<OnnOffBtn/>*/}
            {/*<OnOff />*/}

            <UncontrolledAccordion title={"Users"}/>
            <UncontrolledRating />

        </div>
    );
}


function PageTitle(props: PageTitleType) {
    return (
        <>{props.title}</>
    )
}



export default App;
