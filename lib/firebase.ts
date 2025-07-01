// lib/firebase.ts (ya utils/firebase.ts)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCx5XOYbZZisGAxZ2fVwWyl0k7P8eU5fvM",
  authDomain: "admin-pannel-portfolio.firebaseapp.com",
  projectId: "admin-pannel-portfolio",
  storageBucket: "admin-pannel-portfolio.firebasestorage.app",
  messagingSenderId: "97579709742",
  appId: "1:97579709742:web:622d0a0e6278cc355df6bf"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };

export const getData = async (path: string) => {
  const dbRef = ref(db, path);
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};