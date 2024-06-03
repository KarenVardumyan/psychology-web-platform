import './styles.css';
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

  function showPassword() {
    var x = document.getElementById("signInPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className="sign-in-container">
      <div>
        <h2>Sign In</h2>
      </div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="sign-in-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading}
        />
        <input
          type="password"
          id="signInPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={loading}
        />
        <button type="submit" disabled={loading} className="sign-in-submit-button">
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <a href='/signup'>Go to Sign up page</a>
    </div>
  );
};

export default SignIn;
