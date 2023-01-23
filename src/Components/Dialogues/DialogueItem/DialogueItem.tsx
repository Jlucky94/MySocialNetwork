import React from 'react';

import classes from './../Dialogues.module.css'
import {NavLink} from "react-router-dom";


//Функция которая создает и отображает список линков диалогов/друзей
const DialogueItem = (props: { name: string, id: number }) => {
    return (<div className={classes.dialogue}>
            <NavLink
                to={"/dialogues/" + props.id}
                className={navData => navData.isActive ? classes.active : ""}>
                {props.name}
            </NavLink>
        </div>
    )
}


export default DialogueItem;