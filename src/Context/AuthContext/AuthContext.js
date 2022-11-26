import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig/Firebase.config";

const auth = getAuth(app);
export const authContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading]= useState(false)


  //Crating user with email and password
  const creatingUserWithEp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };



  //update profile of user
  const updatingUser = (name, image) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // LoginWith email and password 


  //Login with Google Provider
  const googleProvider = new GoogleAuthProvider()
  const loginWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider )
  }
  //Login with Google Provider
  const githubProvider = new GithubAuthProvider()
  const loginWithGitHub =()=>{
    return signInWithPopup(auth,githubProvider )
  }


  // login with email password
  const loginWithEp = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


   // Forget Password
   const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe()
    }
  }, [])

  const logout = () => {
    setLoading(true)
    localStorage.removeItem('token')
    return signOut(auth)
  }

//   const verifyEmail = () => {
//     setLoading(true)
//     return sendEmailVerificatio(auth.currentUser)
//   }


  const authInfo = { user, creatingUserWithEp, updatingUser, loginWithEp,logout, loading, setLoading, loginWithGoogle, loginWithGitHub, resetPassword};
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthContext;
