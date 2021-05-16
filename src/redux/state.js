import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts: [
            {msg: "Hello world", like_count: 5}
        ],
    },
    dialogsPage:{
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "hello"},
            {id: 3, message: "whats up?"},
            {id: 4, message: "bye"}
        ],
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Olya"},
            {id: 3, name: "Alex"},
            {id: 4, name: "Petr"}
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        msg: postMessage,
        like_count: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;