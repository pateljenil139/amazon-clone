import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Adjust the path as needed
import { createUserWithEmailAndPassword } from "firebase/auth"; // Import the createUserWithEmailAndPassword function
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const signIn = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(() => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>By Signing-in You Agree Our Terms & Condition*</p>

        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
        <button type="button" class="login-with-google-btn" onClick={signupWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;