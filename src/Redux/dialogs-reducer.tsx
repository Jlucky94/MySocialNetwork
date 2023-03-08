import {v1} from "uuid";
export const NEW_MESSAGE_UPDATE = 'NEW-MESSAGE-UPDATE';
export const ADD_MESSAGE = 'ADD-MESSAGE';

type addMessageAT = ReturnType<typeof addMessage>
//Упразднен с помощью redux-form
// type updateNewMessageAT = ReturnType<typeof updateNewMessage>

export const addMessage = (message:string) => ({type: ADD_MESSAGE,message} as const)
//Упразднен с помощью redux-form
// export const updateNewMessage = (message: string) =>
//     ({type: NEW_MESSAGE_UPDATE, message} as const)

type DialoguePropsType = {
    id: string,
    name: string
}
type MessagePropsType = {
    id: string,
    message: string
}
export type InitialStatePropsType = {
    dialogues: Array<DialoguePropsType>,
    messages: Array<MessagePropsType>,
    newMessage: string,
}

const initialState: InitialStatePropsType = {
    dialogues: [
        {id: '1', name: "Damir"},
        {id: '2', name: "Julia"},
        {id: '3', name: "Evgenii"},
        {id: '4', name: "Silvester"},
        {id: '5', name: "Neo"},
    ],
    messages: [
        {id: '1', message: "Hi, what's up?"},
        {id: '2', message: "Im good,thanks"},
        {id: '3', message: "Lets play overthrow?"},
        {id: '4', message: "Zeus is so weak"},
        {id: '5', message: "Razor is too OP"}
    ],
    newMessage: "Type something",
}
type ActionType = addMessageAT

const dialogsReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: v1(), message: action.message}]
            }
        }
        // case NEW_MESSAGE_UPDATE:
        //     return {
        //         ...state,
        //         newMessage: action.message
        //     }
        default:
            return state
    }
}
export default dialogsReducer;