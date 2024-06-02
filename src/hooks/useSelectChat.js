import { useState, useEffect } from "react";
import {
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "config/firebase";
import useAuth from "hooks/useAuth";
import { getUserData } from 'api/auth';

const useSelectChat = (uid) => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const getUser = async () => {
    try {
      const userData = await getUserData(uid);
      console.log(userData)
      setUser(userData);
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    getUser()
  }, [])

  const { user: currentUser } = useAuth();

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { }

    setUsername("")
  };

  useEffect(() => {
    console.log(user)
    if (user) {
      handleSelect()
    }
  }, [user])

  return {
    user,
    username,
    err,
  };
};

export default useSelectChat;
