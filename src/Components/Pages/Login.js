import React from 'react';
import { Link } from "react-router-dom";
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import From from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>

            <div className="column">
                <Illustration />
                <From className={`${classes.login}`}>
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
};

export default Login;