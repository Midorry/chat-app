import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">My Chat App</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>

                    <button>Login</button>
                    {error && <span>Something went wrong!</span>}
                </form>
                <p>
                    You don't have an account?
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
