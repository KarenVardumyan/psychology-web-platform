import { useState } from "react";
import useSignUp from "hooks/useSignUp";
import './styles.css';

const SignUp = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSignUp,
    setName,
    setSurname,
    name,
    surname,
    setRole
  } = useSignUp();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up-container">
      <div>
        <h2>Sign Up</h2>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignUp} className="sign-up-form">
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          disabled={loading}
        />
        <input
          type="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
          disabled={loading}
        />

        <label for="user-roles" className="user-roles-select-label">Select user role</label>
        <select
          name="userRoles"
          id="user-roles"
          className='user-roles-select'
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="member" selected="selected">Member</option>
          <option value="solder">Solder</option>
          <option value="psychologist">Psychologist</option>
          <option value="student">Student</option>
        </select>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading}
        />
        <input
          type={showPassword ? 'text' : 'password'}
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
            style={{ height: "20px", width: "20px" }}
          />
          <label htmlFor="showPassword">Տեսնել գաղտնաբառը</label>
        </div>
        <button type="submit" disabled={loading} className="sign-up-submit-button">
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <a href='/signin'>Go to Sign in page</a>
    </div>
  );
};

export default SignUp;
