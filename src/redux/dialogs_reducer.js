const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 10, message: state.newMessageText}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.messageText
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, messageText: text}
}

export default dialogsReducer;