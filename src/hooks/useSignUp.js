import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "config/firebase";
import { createUserDocumentFromAuth } from "api/auth";
import mediaUploader from "api/mediaUploader.api"

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [role, setRole] = useState("member");
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("commonPsychologist");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      let photoFromStorage = "";
      if (photo) {
        photoFromStorage = await mediaUploader(photo.file, `users/${res.user.uid}/profilePhoto`);
      }
      const userData = {
        role,
        displayName: name,
        surname,
        photoURL: photoFromStorage,
        description
      };
      role === "psychologist" ? await createUserDocumentFromAuth(res.user, { ...userData, category }) : await createUserDocumentFromAuth(res.user, userData);
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
    setRole,
    photo,
    setPhoto,
    category,
    setCategory,
    description,
    setDescription
  };
};

export default useSignUp;
