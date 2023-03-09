import {ProfilePropsType} from "../../../Redux/profile-reducer";
import React from "react";
import classes from "./ProfileInfo.module.css";
import Element from "../../common/FormControlls/FormControls";
import {requiredField} from "../../../utils/validators/validator";
import {Field, reduxForm} from "redux-form";
import style from "../../common/FormControlls/FormControls.module.css";

const ProfileDataForm = (props: { handleSubmit: any, profile: ProfilePropsType, error:any }) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <button type={'submit'}>Save</button>
        </div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <h2>Full name : <Field component={Element} elementtype='input' validate={[requiredField]} name={"fullName"}
                               placeholder={"Full Name"}/></h2>
        <div className={classes.about}>
            About me : <Field component={Element} elementtype='input' validate={[requiredField]} name={"aboutMe"}
                              placeholder={"About Me"}/>
        </div>
        <div className={classes.job}>
            <span>В поиске работы: <Field component='input' type='checkbox'
                                          name={"lookingForAJob"}/></span>
            <span>My professional skills : <Field component={Element} elementtype='textarea' validate={[requiredField]}
                                                  name={"lookingForAJobDescription"}
                                                  placeholder={"Description"}/></span>
        </div>
        <div className={classes.contacts}>
            <h3>Contacts</h3>
            {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={classes.contact}>
                    <b>{key}: {<Field component={Element} elementtype='input' name={"contacts." + key}
                                      placeholder={key}/>}</b>
                </div>
            })}
        </div>
    </form>
}
export default reduxForm({form: 'profile-update'})(ProfileDataForm)