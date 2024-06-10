import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from 'config/firebase';

export const createUserDocumentFromAuth = async (user, additionalInfo) => {
  if (!user) return;

  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = user;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        ...additionalInfo,
      });
    } catch (error) {
      return error;
    }
  }
  return userDocRef;
};

export const getUserData = async (uid) => {
  if (!uid) return;
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    return { ...userSnapshot.data(), uid }
  } else { return null }
};

export const updateCurrentUser = async (uid, updates) => {
  if (!uid) return;

  const userDocRef = doc(db, "users", uid);
  try {
    await setDoc(userDocRef, updates, { merge: true });
  } catch (error) {
    return error;
  }
  return userDocRef;
};
