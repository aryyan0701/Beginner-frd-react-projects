import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC6-oIFtRKko6Su_v43xz4Md96mDeVciAg",
  authDomain: "signup-bf04c.firebaseapp.com",
  projectId: "signup-bf04c",
  storageBucket: "signup-bf04c.appspot.com",
  messagingSenderId: "747585601549",
  appId: "1:747585601549:web:52a4944bb003155a58d544",
  measurementId: "G-11B2MGCDGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };