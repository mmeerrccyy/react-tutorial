import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((el) => (<DialogItem name={el.name} id={el.id}/>));
    let messagesElements = props.state.messages.map((el) => (<Message message={el.message}/>))

    let MessageArea = React.createRef();

    let foo = () => {
        let text = Message.current.value;
        alert(text);
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
                <textarea ref={MessageArea}></textarea>
            </div>
            <div>
                <button onClick={foo}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;