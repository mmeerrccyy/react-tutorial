import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((el) => (<DialogItem name={el.name} id={el.id}/>));
    let messagesElements = props.dialogsPage.messages.map((el) => (<Message message={el.message}/>))

    let MessageArea = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = MessageArea.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={MessageArea} onChange={onMessageChange} value={props.dialogsPage.newMessageText}/>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;