
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSignIn from "hooks/useSignIn";
import './styles.css';

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

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-in-container">
      <div>
        <h2>Մուտք</h2>
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
          type={showPassword ? 'text' : 'password'}
          id="signInPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          disabled={loading}
        />
        <div className="show-password-container">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={handleShowPasswordChange}
            style={{ height: "20px", width: "20px"}}
          />
          <label htmlFor="showPassword">Տեսնել գաղտնաբառը</label>
        </div>
        <button type="submit" disabled={loading} className="sign-in-submit-button">
          {loading ? "Մուտք..." : "Մուտք"}
        </button>
      </form>
      <a href='/signup'>Գրանցվել</a>
    </div>
  );
};

export default SignIn;
