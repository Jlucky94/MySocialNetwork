import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import Element from "../common/FormControlls/FormControls";
import {requiredField} from "../../utils/validators/validator";
import {Navigate} from "react-router-dom";
import {loginTC} from "../../Redux/auth-reducer";
import style from '../common/FormControlls/FormControls.module.css'


const LoginForm = (props: any) => {
    const captcha = useAppSelector<string | null>(state => state.auth.captcha)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Element} elementtype='input' validate={[requiredField]} name={"email"}
                       placeholder={"Email"}/>
            </div>
            <div>
                <Field component={Element} elementtype='input' validate={[requiredField]} name={"password"}
                       type={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component='input' name={"rememberMe"} type="checkbox"/> remember me
            </div>

            {captcha && <img src={captcha} alt=""/>}
            <div>
                {captcha && <Field component='input' elementtype='input' validate={[requiredField]} name={"captcha"}
                                   placeholder={"Enter symbols from picture"}/>}
            </div>

            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
        const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)
        const dispatch = useAppDispatch()
        const onSubmit = (formData: any) => {
            dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
        }
        if (isAuth) {
            return <Navigate to={'/profile'}/>
        } else return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>

            </div>
        )
            ;
    }
;

export default Login;
