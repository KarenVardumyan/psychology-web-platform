
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase";
import { getUserData } from 'api/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      getUserData(currentUser?.uid).then(user => { setUser(user); setLoading(false); })
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuth;
