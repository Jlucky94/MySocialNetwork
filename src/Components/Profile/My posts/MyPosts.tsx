import React, {ChangeEvent} from 'react';

import classes from './MyPosts.module.css'
import Post from "./Post/Post";

import {ProfilePagePropsType} from "./MyPostsContainer";

const MyPosts = (props: ProfilePagePropsType) => {
    const postsElements = props.profilePage.posts.map
    (p => <Post
        key={p.id}
        message={p.message}
        likeCounts={p.likeCounts}
        id={p.id}
    />)
    const onClickAddPost = () => {
        props.addPostActionCreator()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostMessageUpdateActionCreator(e.currentTarget.value)
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPostMessage}/>
                </div>
                <div>
                    <button onClick={onClickAddPost}>
                        Add post
                    </button>
                    <button>
                        Remove post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;