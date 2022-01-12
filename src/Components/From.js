import React from 'react';
import classes from '../styles/Form.module.css';

const From = ({ children, className, ...rest }) => {
    return (
        <>
            <form className={`${className} ${classes.form}`} action="#" {...rest}>
                {children}
            </form>
        </>
    );
};

export default From;