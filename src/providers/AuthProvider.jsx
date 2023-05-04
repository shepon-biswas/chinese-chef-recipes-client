import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

// Create a New User
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

// Sign In User
const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

// Update User Profile
const updateUser = (user, name, photo) => {
    setLoading(true);
    return updateProfile(user, {
        displayName: name,
        photoURL: photo
    })
}

// signin with google
const googleSignin =  () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}
// github with google
const githubSignin =  () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
}

// logout
const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
}, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUser,
        googleSignin,
        githubSignin,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;