import React, { useState } from "react";

import { useFormInput, setUserSession } from "../../util/Common";
import {
  USERNAME,
  PASSWORD,
  WRONG_DETAILS,
  BLANK_USERNAME,
  BLANK_PASSWORD
} from "../../constants";
import "./default.css";

const Login = ({ history }) => {
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
      if (username.value === USERNAME && password.value === PASSWORD) {
        setUserSession(`${USERNAME}_${Math.random(0, 100)}`, username.value);
        history.push("/dashboard");
        setError(null);
        return;
      }

      setError(WRONG_DETAILS);
      setLoading(false);
    }
  };
  const resetErrors = () => {
    setError(null);
    setUserNameError(null);
    setPasswordError(null);
  };
  const validateUserDetails = () => {
    if (!username.value.trim()) {
      setUserNameError(BLANK_USERNAME);
      return false;
    } else if (!password.value.trim()) {
      setPasswordError(BLANK_PASSWORD);
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
            data-testid="username"
          />
        </div>
        {userNameError && (
          <p className="login-form__username-error">{userNameError}</p>
        )}
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...password}
            id="password"
            data-testid="password"
          />
        </div>
        {passwordError && (
          <p className="login-form__password-error" id="password-error">
            {passwordError}
          </p>
        )}
        {error && (
          <p className="login-form__error" id="error">
            {error}
          </p>
        )}
        <input
          id="submit-btn"
          type="submit"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
          className="submit-btn"
          data-testid="submit-btn"
        />
      </form>
    </section>
  );
};

export default Login;
