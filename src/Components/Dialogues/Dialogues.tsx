import React, {ChangeEvent} from 'react';
import classes from './Dialogues.module.css'
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import {DialoguePagePropsType} from "./DialoguesContainer";


const Dialogues = (props: DialoguePagePropsType) => {
    const dialoguesElements = props.dialoguePage.dialogues.map(d => <DialogueItem key={d.id} name={d.name} id={d.id}/>) //мапим массив диалогов
    const messagesElements = props.dialoguePage.messages.map(m => <Message key={m.id} message={m.message}/>)
    const onClickAddMessage = () => {
        props.onClickAddMessage()
    }
    const messageOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }
    return (
        <div className={classes.dialogues}>
            <div className={classes.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea
                        value={props.dialoguePage.newMessage}
                        onChange={messageOnChange}
                    />
                </div>
                <button
                    onClick={onClickAddMessage}
                >Send
                </button>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogues;