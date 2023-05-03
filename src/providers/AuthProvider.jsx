import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from 'react';
import app from "../firebase/firebase.config";


 export const AuthContext = createContext(null);

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




    const authInfo = {
        user,
        createUser,
        signInUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;