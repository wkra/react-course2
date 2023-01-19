import React, { useCallback, useState } from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [show, setShow] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('APP RUNNING')


    const toggleHandler = useCallback(() => {
        if (allowToggle) {
            setShow(prevState => !prevState);
        }
    },[allowToggle]);

    const allowToggleHandler = () =>{
        setAllowToggle(true)
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={show} />
            <Button onClick={allowToggleHandler}>AllowToggle Toggle</Button>
            <Button onClick={toggleHandler}>Toggle</Button>
        </div>
    );
}

export default App;
