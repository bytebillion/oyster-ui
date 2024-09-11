import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA0LEdyfWDfor-UzXOyCLs50ABpQ6Q67w",
  authDomain: "oyster-ecfe1.firebaseapp.com",
  projectId: "oyster-ecfe1",
  storageBucket: "oyster-ecfe1.appspot.com",
  messagingSenderId: "816955338147",
  appId: "1:816955338147:web:5a343f85713060cef87e16",
  measurementId: "G-YM21LEKDJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()



