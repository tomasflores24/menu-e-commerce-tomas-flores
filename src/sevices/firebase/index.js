import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjh5mAtOXETXGidSfEAervRzbEXrj5oAY",
  authDomain: "proyecto-final-tomas-flores.firebaseapp.com",
  projectId: "proyecto-final-tomas-flores",
  storageBucket: "proyecto-final-tomas-flores.appspot.com",
  messagingSenderId: "973535355545",
  appId: "1:973535355545:web:fd51bcebc9b781b8e04e08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;