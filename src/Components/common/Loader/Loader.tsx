import React from 'react';
import classes from './Loader.module.css'
import preloader from "./loader.svg";


const Loader = () => {

    return (
        <div className={classes.loader}>
            <div>
                <img alt="preloading" src={preloader}/>
            </div>
        </div>
    )
}
export default Loader;