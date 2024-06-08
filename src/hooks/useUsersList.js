import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "config/firebase";

const useUsersList = (currentUser) => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const CONDITION = currentUser.role === "psychologist" ? "!=" : "==";
      const q = query(
        collection(db, "users"),
        where("role", CONDITION, "psychologist")
      );
      const unSub = onSnapshot(q, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          doc.exists() && users.push({ ...doc.data(), uid: doc.id });
        });
        setUsers(users);
      });
      return () => unSub();
    }
  }, [currentUser]);

  const updateUser = async (id, updates) => {
    console.log(id)
    if (!id) return;
    const userDocRef = doc(db, "users", id);
    try {
      await setDoc(userDocRef, updates, { merge: true });
    } catch (error) {
      console.error(`Error while updating user collection ${error}`);
      return error;
    }
  };

  return {
    users,
    updateUser,
  };
};

export default useUsersList;
