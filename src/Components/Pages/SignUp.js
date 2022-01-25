import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react/cjs/react.development';
import { useAuth } from "../../Contexts/AuthContext";
import classes from '../../styles/SignUp.module.css';
import Button from '../Button';
import CheckBox from '../CheckBox';
import From from '../From';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [check, setCheck] = useState("");
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate()
    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        // use validation
        if (pass !== confirmPass) {
            return setError("Passwords don't match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, pass, userName);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Something is Wrong.")
        }
    }


    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <From className={`${classes.signup}`} onSubmit={handleSubmit}>
                    <TextInput required type="text" placeholder="Enter Your Name" icon='person' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <TextInput required type="text" placeholder="Enter Your E-mail" icon='alternate_email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextInput required type="password" placeholder="Enter Your Password" icon='lock' value={pass} onChange={(e) => setPass(e.target.value)} />
                    <TextInput required type="password" placeholder="Confirm Your Password" icon='lock_clock' value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    <CheckBox required text="I agree to the Terms &amp; Conditions" value={check} onChange={(e) => setCheck(e.target.value)} />
                    <Button disabled={loading} type="submit"><span>Submit now</span></Button>
                    {error && <p className="error">{error}</p>}
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
};

export default SignUp;
