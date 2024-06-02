import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { createUserDocumentFromAuth } from 'api/auth'

const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      await createUserDocumentFromAuth(res.user)
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
    handleSignIn,
  };
};

export default useSignIn;
