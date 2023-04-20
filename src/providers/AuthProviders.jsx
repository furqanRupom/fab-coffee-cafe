import React, { createContext, useEffect, useState } from 'react';
export const CafeContext = createContext();
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // sign up
    const signUpUser = (email,password)=>{
        setLoading(false);
       return  createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in

    const signInUser = (email,password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //set display name
    const setUserName = (currentUser,name)=>{
       return  updateProfile(currentUser,{
        displayName:name
       })
    }

    // logout

    const logOut = ()=>{
        return signOut(auth)
    }

    // reset password

    const resetPassword = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }


    // observer

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            UnSubscribe();
        }
    },[])



    const authInfo = {
            user,
         signUpUser,
         signInUser,
         setUserName,
         logOut,
        resetPassword,
        loading
    }

    return (
        <>
        <CafeContext.Provider value={authInfo}>
            {children}
        </CafeContext.Provider>
        </>
    );
};

export default AuthProviders;