import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {

                    let addMessage = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }

                    return <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange}
                                    dialogs={store.getState().dialogsPage.dialogs}
                                    messages={store.getState().dialogsPage.messages}
                                    newMessageText={store.getState().dialogsPage.newMessageText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;