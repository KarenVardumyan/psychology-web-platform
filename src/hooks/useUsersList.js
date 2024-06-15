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

const categories = {
  commonPsychologist: "Ընդհանուր",
  soldersPsychologist: "Զինվորական",
  childPsychologist: "Մանկական",
  familyPsychologist: "Ընտանեկան",
}

const useUsersList = (currentUser, isMainPage) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const CONDITION = currentUser.role !== "psychologist" || isMainPage ? "==" : "!=";
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

  useEffect(() => {
    if (selectedCategory) {
      const filteredUsers = users.filter(user => user.category === selectedCategory);
      setFilteredUsers(filteredUsers)
    }
    else { setFilteredUsers([]) }
  }, [selectedCategory]);

  const updateUser = async (id, updates) => {
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
    users: selectedCategory ? filteredUsers : users,
    selectedCategory,
    filteredUsers,
    categories,
    setFilteredUsers,
    setSelectedCategory,
    updateUser,
  };
};

export default useUsersList;
