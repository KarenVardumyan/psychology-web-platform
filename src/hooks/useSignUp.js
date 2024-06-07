import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "config/firebase";
import { createUserDocumentFromAuth } from 'api/auth'

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("member");
  // const [userData, setUserData] = useState({
  //   role,
  //   displayName: name,
  //   surname
  // });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserDocumentFromAuth(res.user, {
        role,
        displayName: name,
        surname
      })
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
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
    setRole
  };
};

export default useSignUp;
