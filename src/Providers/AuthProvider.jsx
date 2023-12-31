import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firbase/firbase";


export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    // Create User
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SignOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //Observation user
    useEffect(() =>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Current User', currentUser
            );
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[]) 

     // Google Login
  const googleProvider =  () => {
    return signInWithPopup(auth, provider);
  };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleProvider

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;