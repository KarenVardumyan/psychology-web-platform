import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "config/firebase";

const useUsersList = (currentUser) => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  const getUsers = async (role) => {
    const CONDITION = role === "psychologist" ? "!=" : "==";
    const q = query(
      collection(db, "users"),
      where("role", CONDITION, "psychologist")
    );

    try {
      const querySnapshot = await getDocs(q);
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push({ ...doc.data(), uid: doc.id });
      });
      setUsers(users);
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    currentUser && getUsers(currentUser.role);
  }, [currentUser]);

  return {
    users,
  };
};

export default useUsersList;
