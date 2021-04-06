import s from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>;
}

const Dialogs = (props) => {

    let dialogsData = [
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

    let messagesData = [
        {
            id: 1,
            message: "Dima"
        },
        {
            id: 2,
            message: "Olya"
        },
        {
            id: 3,
            message: "Alex"
        },
        {
            id: 4,
            message: "Petr"
        }
    ]

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id ={dialogsData[0].id} activeClassName={s.active}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;