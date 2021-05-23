import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile"
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
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
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
