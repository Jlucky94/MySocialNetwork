import React from 'react';
import classes from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {addMessage, InitialStatePropsType} from "../../Redux/dialogs-reducer";
import {compose} from "redux";
import withAuthRedirect from "../../HOCs/withAuthRedirect";
import {Field, reduxForm} from 'redux-form'


const Dialogues = () => {
    const dialoguePage = useAppSelector<InitialStatePropsType>(state => state.dialoguePage)
    const dialoguesElements = dialoguePage.dialogues.map(d => <DialogueItem key={d.id} name={d.name} id={d.id}/>) //мапим массив диалогов
    const messagesElements = dialoguePage.messages.map(m => <Message key={m.id} message={m.message}/>)
    const dispatch = useAppDispatch()
    const onClickAddMessage = (formData: any) => {
        dispatch(addMessage(formData.newMessageBody))
    }
//Упразднен с помощью redux-form
    // const messageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     dispatch(updateNewMessage(e.currentTarget.value))
    // }
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={classes.messages}>
                <AddMessageFormRedux
                    onSubmit={onClickAddMessage}
                />
                {messagesElements}
            </div>
        </div>
    )
}
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter new message"/>
            </div>
            <button
            >Send
            </button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default compose(withAuthRedirect)(Dialogues);