import s from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>;
}

const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map((el) => (<DialogItem name={el.name} id={el.id} />));

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

    let messagesElements = messages.map((el) => (<Message message={el.message} />))


    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;