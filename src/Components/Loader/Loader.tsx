import React from 'react';
import classes from './Loader.module.css'
import preloader from "./loader.svg";


const Loader = (props:{isFetching: boolean}) => {

    return (
        <div className={classes.loader}>
            <div>
                {props.isFetching ? <img alt="preloading" src={preloader}/> : null}
            </div>
        </div>
    )
}
export default Loader;