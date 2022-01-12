import React from 'react';
import classes from '../../styles/SignUp.module.css';
import From from '../From';
import Illustration from '../Illustration';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration />
                <From className={`${classes.signup}`} />
            </div>
        </>
    );
};

export default SignUp;