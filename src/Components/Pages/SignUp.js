import React from 'react';
import { Link } from "react-router-dom";
import classes from '../../styles/SignUp.module.css';
import Button from '../Button';
import CheckBox from '../CheckBox';
import From from '../From';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration />
                <From className={`${classes.signup}`} >
                    <TextInput type="text" placeholder="Enter Your Name" icon='person' />
                    <TextInput type="text" placeholder="Enter Your E-mail" icon='alternate_email' />
                    <TextInput type="password" placeholder="Enter Your Password" icon='lock' />
                    <TextInput type="password" placeholder="Confirm Your Password" icon='lock_clock' />
                    <CheckBox text="I agree to the Terms &amp; Conditions" />
                    <Button><span>Submit now</span></Button>
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
};

export default SignUp;