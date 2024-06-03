import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "context/ChatContext";
import useAuth from "hooks/useAuth";
import { db } from "config/firebase";

const useChats = () => {
  const [chats, setChats] = useState([]);

  const { user } = useAuth();
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user?.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    user?.uid && getChats();
  }, [user?.uid]);

  const handleSelectChat = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return {
    chats,
    handleSelectChat,
  };
};

export default useChats;
