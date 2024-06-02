import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "config/firebase";

const usePhysiologistsList = () => {
  const [physiologists, setPhysiologists] = useState([]);
  const [err, setErr] = useState(false);

  const getPhysiologist = async () => {
    const q = query(
      collection(db, "users"),
      where("role", "==", 'physiologist')
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setPhysiologists([...physiologists, { ...doc.data(), uid: doc.id }]);
      });
    } catch (err) {
      setErr(true);
    }
  };
  useEffect(() => {
    getPhysiologist()
  }, [])

  return {
    physiologists,
  };
};

export default usePhysiologistsList;
