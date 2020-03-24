import React, { useState } from "react";

import { useFormInput, setUserSession } from "../../util/Common";
import {
  UserName,
  Password,
  Wrong_Details,
  Blank_UserName,
  Blank_Password
} from "../../constants";
import "./default.css";

function Login({ history }) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = event => {
    event.preventDefault();
    resetErrors();
    if (validateUserDetails()) {
      setLoading(true);
      if (username.value === UserName && password.value === Password) {
        setUserSession(`${UserName}_${Math.random(0, 100)}`, username.value);
        history.push("/dashboard");
        setError(null);
        return;
      }

      setError(Wrong_Details);
      setLoading(false);
    }
  };
  const resetErrors = () =>{
    setError(null);
    setUserNameError(null);
    setPasswordError(null)
  }
  const validateUserDetails = () => {
    if (!username.value.trim()) {
      setUserNameError(Blank_UserName);
      return false;
    } else if (!password.value.trim()) {
      setPasswordError(Blank_Password);
      return false;
    }
    setError(null);
    return true;
  };
  return (
    <section className="login-form">
      <h1 className="sign-in">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...username}
            id="username"
            data-test-id="username"
          />
        </div>
        {userNameError && (
          <p className="login-form__username-error">
           {userNameError}
          </p>
        )}
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...password}
            id="password"
            data-test-id="password"
          />
        </div>
        {passwordError && (
          <p className="login-form__password-error">
           {passwordError}
          </p>
        )}
        {error && (
          <p className="login-form__error">
           {error}
          </p>
        )}
        <input
          type="submit"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
          className="submit-btn"
          data-test-id="submit-btn"
        />
      </form>
    </section>
  );
}

export default Login;
