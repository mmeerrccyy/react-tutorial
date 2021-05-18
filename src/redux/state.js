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
    addPost(){
        let newPost = {
            msg: this._state.profilePage.newPostText,
            like_count: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(postText){
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },
    addMessage(){
        let newMessage = {
            id: 10,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state)
    },
    updateNewMessageText(messageText){
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;