import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";

const mediaUploader = async (file, path = "photos") => {
  const storageRef = ref(storage, path);
  const stapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(stapshot.ref);
  return url;
};

export default mediaUploader;
