import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {msg: "Hello world", like_count: 5}
        ],
        newPostText: 'hello world!!!'
    },
    dialogsPage: {
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
        newMessageText: 'bello bananananana'
    },
}

export let addPost = () => {
    let newPost = {
        msg: state.profilePage.newPostText,
        like_count: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 10,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state)
}

export let updateNewMessageText = (messageText) => {
    state.dialogsPage.newMessageText = messageText;
    rerenderEntireTree(state);
}

export default state;