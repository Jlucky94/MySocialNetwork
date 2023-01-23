import React from 'react';

import classes from './../Dialogues.module.css'

const Message = (props: { message: string }) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default Message;