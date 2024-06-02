import React from "react";
import { useNavigate } from "react-router-dom";
import useSignIn from "hooks/useSignIn";

const SignIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSignIn,
  } = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignIn(e);
    navigate("/home");
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
