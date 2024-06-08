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

const useSelectComments = (uid) => {
  const [err, setErr] = useState(false);

  const handleSelect = async (user, senderUid, comment) => {
    //check whether the group(chats in firestore) exists, if not create
    try {
      const res = await getDoc(doc(db, "comments", uid));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "comments", uid), { comments: [] });
      }
    } catch (err) { }
  };

  return {
    err,
    handleSelect,
  };
};

export default useSelectComments;
