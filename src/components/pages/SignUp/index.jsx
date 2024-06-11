import { useState } from "react";
import useSignUp from "hooks/useSignUp";
import "./styles.css";

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
    role,
    setRole,
    photo,
    setPhoto,
    category,
    setCategory,
    setDescription
  } = useSignUp();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up-container">
      <div>
        <h2>Գրանցում</h2>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignUp} className="sign-up-form">
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          disabled={loading}
          style={{ margin: "5px 0" }}
        />
        <input
          type="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
          disabled={loading}
          style={{ margin: "5px 0" }}
        />
        <input
          type="file"
          value={photo?.src}
          onChange={(e) => {
            const file = e.target.files[0];

            if (file) {
              setPhoto({ file, src: e.target.value });
            }
          }}
          placeholder="Photo"
          disabled={loading}
          accept="image/*"
          style={{ margin: "5px 0", height: "45px" }}
        />

        <label for="user-roles" className="user-roles-select-label">
          Ընտրել դերը
        </label>
        <select
          name="userRoles"
          id="user-roles"
          className="user-roles-select"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="member" selected="selected">
            Օգտատեր
          </option>
          <option value="solder">Զինվորական</option>
          <option value="psychologist">Հօգեբան</option>
          <option value="student">Ուսանող</option>
        </select>


        {role === "psychologist" && (
          <>
            <label for="psychologist-category" className="user-roles-select-label" style={{marginTop: "5px"}}>
              Ընտրել հոգեբանի կատեգորիա
            </label>
            <select
              name="psychologistCategory"
              id="psychologist-category"
              className="user-roles-select"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="commonPsychologist" selected>
                Ընդհանուր
              </option>
              <option value="soldersPsychologist">Զինվորական</option>
              <option value="familyPsychologist">Ընտանեկան</option>
              <option value="childPsychologist">Մանկական</option>
            </select>
          </>
        )}
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          style={{ width: "350px", margin: "5px 0"}}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          disabled={loading}
          style={{ margin: "5px 0" }}
        />
        <input
          type={showPassword ? "text" : "password"}
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
        <button
          type="submit"
          disabled={loading}
          className="sign-up-submit-button"
        >
          {loading ? "Գրանցվել..." : "Գրանցվել"}
        </button>
      </form>
      <a href="/signin">Տեղափոխվել մուտքի էջ</a>
    </div>
  );
};

export default SignUp;
