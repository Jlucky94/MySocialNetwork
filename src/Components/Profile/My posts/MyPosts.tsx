import React from 'react';

import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {addPost, InitialStatePropsType} from "../../../Redux/profile-reducer";
import {Field, reduxForm, clearFields} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import Element from "../../common/FormControlls/FormControls";

const MyPosts = () => {
    const profilePage = useAppSelector<InitialStatePropsType>(state => state.profilePage)
    const dispatch = useAppDispatch()
    const postsElements = profilePage.posts.map
    (p => <Post
        key={p.id}
        message={p.message}
        likeCounts={p.likeCounts}
        id={p.id}
    />)
    const onClickAddPost = (formData:any) => {
        dispatch(addPost(formData.newPostBody))
    }

    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     dispatch(newPostMessageUpdate(e.currentTarget.value))
    // }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux
                    onSubmit={onClickAddPost}
                />
                <button>
                    Remove post
                </button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};
const maxLength = maxLengthCreator(10)
const AddNewPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Element} elementtype='textarea' name="newPostBody" placeholder="Enter new post" validate={[requiredField,maxLength]}/>
            </div>
            <button>
                Add post
            </button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;