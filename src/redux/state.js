const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-TEXT-MESSAGE';

let store = {
    _state: {
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
    },
    _callSubscriber(){
        console.log('state');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                msg: this._state.profilePage.newPostText,
                like_count: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE){
            let newMessage = {
                id: 10,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, postText: text}
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, messageText: text}
}


export default store;
window.store = store;