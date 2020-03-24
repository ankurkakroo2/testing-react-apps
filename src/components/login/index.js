import React, { useState } from "react";

import { useFormInput } from "../../util/common";
import "./default.css";

function Login({ history }) {
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    history.push("/dashboard");
  };

  return (
    <section>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...username}
            id="username"
            data-test-id="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...password}
            id="password"
            data-test-id="password"
            required
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
          onClick={handleLogin}
          disabled={loading}
        />
      </form>
    </section>
  );
}

export default Login;
