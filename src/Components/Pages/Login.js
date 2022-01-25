import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../Contexts/AuthContext';
import classes from "../../styles/Login.module.css";
import Button from "../Button";
import From from "../From";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
const Login = () => {


    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate()
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, pass);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed To Login.")
        }
    }
    return (
        <>
            <h1>Login to your account</h1>

            <div className="column">
                <Illustration />
                <From className={`${classes.login}`} onSubmit={handleSubmit}>
                    <TextInput
                        required
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextInput required type="password" placeholder="Enter password" icon="lock"
                        value={pass} onChange={(e) => setPass(e.target.value)} />

                    <Button type="submit" disabled={loading}>
                        <span>Submit Now</span>
                    </Button>
                    {error && <p className="error">{error}</p>}
                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
};

export default Login;