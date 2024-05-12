// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDflosXDSO719vFcgq9SaIBGmMiBf0qvyU",
  authDomain: "react-project-ed047.firebaseapp.com",
  projectId: "react-project-ed047",
  storageBucket: "react-project-ed047.appspot.com",
  messagingSenderId: "592837445512",
  appId: "1:592837445512:web:7a6f8257cddd278fca5c3d",
  measurementId: "G-DVM4YFMF1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

setPersistence(auth,browserLocalPersistence)
.then(()=>{
  console.log('Auth persitance set to localStorage')
})
.catch(err => console.error(err))