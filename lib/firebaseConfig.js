import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { ref, getDownloadURL } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyD1smR9TD9eO_uqr8_FvwKYfo_N01Rert8",
  authDomain: "upperroom-volunteer.firebaseapp.com",
  projectId: "upperroom-volunteer",
  storageBucket: "upperroom-volunteer.appspot.com",
  messagingSenderId: "685736888526",
  appId: "1:685736888526:web:25cb79e1e1ab9fffb6289f",
  measurementId: "G-XFK9RZLF11"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

export async function fetchImageURL(page, imageName) {
  const imageRef = ref(storage, `images/${page}/${imageName}`);
  const url = await getDownloadURL(imageRef);
  return url;
}

// 

export async function fetchText(textCollection) {
  const fetchTextCollection = collection(db, textCollection);
  const snapshot = await getDocs(fetchTextCollection);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
} 
