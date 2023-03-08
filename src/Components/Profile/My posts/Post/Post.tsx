import React, {FC, PropsWithChildren} from 'react';
import classes from './Post.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {PostsPropsType} from "../../../../Redux/profile-reducer";


const Post: FC<PostsPropsType> = (props: PropsWithChildren<PostsPropsType>) => {
    return (
        <div className={classes.item}>
            <img alt="Evgenii Li"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sP73F3kERIiDXZBIro0Ga58H6vAHIEfopA&usqp=CAU"/>
            {props.message}
            <div>
                <span>
                    <FavoriteIcon
                        color={"primary"}
                        fontSize={"small"}
                    />
                    {props.likeCounts}
                </span>
            </div>
        </div>

    );
};

export default Post;