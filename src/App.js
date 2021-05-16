import './App.css';
import React, {Component} from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <div className="app-wrapper-header">
                    <Header/>
                </div>
                <div className="app-wrapper-nav">
                    <Navbar/>
                </div>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
