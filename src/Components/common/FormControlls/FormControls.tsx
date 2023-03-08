import React from 'react';
import styles from './FormControls.module.css'

// @ts-ignore
const Element = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <props.elementtype {...input}{...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export default Element;