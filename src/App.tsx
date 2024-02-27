import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating";

type PageTitleType = {
    title: string
}

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is APP-component"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={"Menu"} collapsed/>
            <Accordion title={"Users"} collapsed={false}/>
        </div>
    );
}


function PageTitle(props: PageTitleType) {
    return (
        <>{props.title}</>
    )
}



export default App;
