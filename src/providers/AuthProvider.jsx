import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { createContext } from 'react';
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const user = {};

// Create a New User
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Sign In User
const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

// Update User Profile
const updateUser = (user, name, photo) => {
    return updateProfile(user, {
        displayName: name,
        photoURL: photo
    })
}

// signin with google
// const googleSignin =  (auth, provider) =>{
//     return signInWithPopup(auth, provider);
// }


    const authInfo = {
        user,
        createUser,
        signInUser,
        updateUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;