import React from "react";
import s from "./Users.module.css";

let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([{
            photoUrl: 'data:image/png;base64,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',
            id: 1,
            fullname: "Dima",
            status: "Hello there!",
            location: {city: 'Lviv', country: 'Ukraine'},
            followed: true
        },
            {
                photoUrl: 'data:image/png;base64,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',
                id: 2,
                fullname: "Olya",
                status: "We lov programming",
                location: {city: 'Kyiv', country: 'Ukraine'},
                followed: true
            },
            {
                photoUrl: 'data:image/png;base64,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',
                id: 3,
                fullname: "Stepan",
                status: "Hello world!",
                location: {city: 'Odesa', country: 'Ukraine'},
                followed: true
            },
            {
                photoUrl: 'data:image/png;base64,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',
                id: 4,
                fullname: "Petro",
                status: "im trying do sthing",
                location: {city: 'Kharkiv', country: 'Ukraine'},
                followed: false
            },])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='ava' className={s.photo}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.fullname}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;