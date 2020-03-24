import React, { useState } from "react";

import { useFormInput, setUserSession } from "../../util/Common";
import "./default.css";

function Login({ history }) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = event => {
    event.preventDefault();
    setLoading(true);
    if (username.value === "admin" && password.value === "admin") {
      setUserSession(`admin_${Math.random(0, 100)}`, username.value);
      history.push("/dashboard");
      setError(null);
    }
    setLoading(false);
  };

  return (
    <section className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="submit"
            value={loading ? "Loading..." : "Login"}
            onClick={handleLogin}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...password}
            id="password"
            data-test-id="password"
          />
        </div>
        {error && (
          <>
            <small style={{ color: "red" }}>{error}</small>
          </>
        )}
        <input
          type="submit"
          value={loading ? "Loading..." : "Login"}
          disabled={loading}
        />
      </form>
    </section>
  );
}

export default Login;
