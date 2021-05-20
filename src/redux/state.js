import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

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

        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)

        this._callSubscriber(this._state);

    }
}



export default store;
window.store = store;