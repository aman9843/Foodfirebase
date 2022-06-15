import { createContext, useState,  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { app } from "../firebase.config";
import Swal from "sweetalert2";
import {auth} from '../firebase.config'
// import { saveuserdata } from "../utils/firebaseFunction";

export const UserContext = createContext({});





export const UserContextProvider = ({ children }) => {
    
    
    
  const [user,setUser] = useState("")
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(user) : setUser(null);
      setError("");
      setLoading(false);
     
    });

    return () => {
        unsubscribe();
    }
  }, [user]);

  // Authentication for Sign Up
  const registerUser = (name, email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          
        });
      })
      .then((res) => {
        console.log(res)
        // saveuserdata(res)
        Swal.fire(
          "Congartulation",
           "SuccessFully Registered with us",
          "success"
        );
        navigate('/')
        
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      });
      })
      .finally(() => {
        setLoading(false);
      });
  };


  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider).then((res) => {
      localStorage.setItem("user", JSON.stringify(res));
      console.log(res)
      navigate('/main')
    }).catch((err) => {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      });
    })
    
    
  }
  // Authentication for sign In:

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
        console.log(res)
        Swal.fire(
          "Hurray!",
          "Successfully Logged In",
          "success"
        );
        navigate('/main')
       
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // logout

  const logOut = () => {
    return signOut(auth);
    
  }


  // forgot Password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
  user,
  loading,
  error,
  googleSignIn,
  registerUser,
  signInUser,
  logOut,
  forgetPassword

  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
    return  useContext(UserContext)
  }

