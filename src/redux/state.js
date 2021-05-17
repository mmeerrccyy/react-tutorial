let rerenderEntireTree = () => {
    console.log('state');
}

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

export const updateNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 10,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree()
}

export const updateNewMessageText = (messageText) => {
    state.dialogsPage.newMessageText = messageText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;