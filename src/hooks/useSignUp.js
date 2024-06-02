import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "config/firebase";
import { createUserDocumentFromAuth } from 'api/auth'

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    role: 'member',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await createUserDocumentFromAuth(res.user, userData)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      navigate("/home");
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
  };
};

export default useSignUp;
