import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;