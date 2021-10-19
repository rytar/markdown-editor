import React, { useState } from 'react';
import Editor from './components/Editor';
import Display from './components/Display';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [text, setText] = useState("");
    return (
        <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "column", alignItems: "center"}}>
            <Editor onChange={setText} />
            <Display text={text}/>
        </div>
    );
}

export default App;
