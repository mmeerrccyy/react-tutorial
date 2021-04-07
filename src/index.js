import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App messages={messages} dialogs={dialogs} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

let posts = [
    {
        msg: "Hello world",
        like_count: 5
    }
]

let messages = [
    {
        id: 1,
        message: "hi"
    },
    {
        id: 2,
        message: "hello"
    },
    {
        id: 3,
        message: "whats up?"
    },
    {
        id: 4,
        message: "bye"
    }
]

let dialogs = [
    {
        id: 1,
        name: "Dima"
    },
    {
        id: 2,
        name: "Olya"
    },
    {
        id: 3,
        name: "Alex"
    },
    {
        id: 4,
        name: "Petr"
    }
]

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
