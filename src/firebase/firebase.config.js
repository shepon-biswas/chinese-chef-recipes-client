// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo5a319Pvu_9onL90xSVV4XLf990KvGJs",
  authDomain: "chinese-chef-recipes.firebaseapp.com",
  projectId: "chinese-chef-recipes",
  storageBucket: "chinese-chef-recipes.appspot.com",
  messagingSenderId: "951637751345",
  appId: "1:951637751345:web:78425eaa8ea7ae5ae98710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

