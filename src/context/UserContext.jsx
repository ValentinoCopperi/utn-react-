import React, { createContext } from "react";
import { useState,useEffect } from "react";
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
export const UserContext = createContext()

export default function UserContextProvider ({children}){
    const[user,setUser] = useState(null)
    const[warning,setWarning] = useState(null)

    const handleSubmit = (datos) => {
       
        const{name,user,password} = datos
        createUserWithEmailAndPassword(auth,user,password)
        .then((userCredential)=>{
            const user = userCredential.user.email
            setWarning('User' + user + ' register success')
        })
        .catch((err) =>{
            setWarning(err.message)
        })
      }

      const handleLogin = (datos) => {
        const{email,password} = datos
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user.email
            setUser(user)
            setWarning('Login Success')
        })
        .catch((err) =>{
          setWarning(err.message)
        })
      }

      const handleSignOut = () => {
        auth.signOut()
        .then(()=>{
          setUser(null)
          window.localStorage.removeItem("cart")
        })
      }

      const userCheckExist = () => {
        onAuthStateChanged(auth, (user)=> {
            if(user) {
                setUser(user.email)
            }
        })
      }
      
    return (
        <UserContext.Provider
        value={{
            user,
            warning,
            handleSubmit,
            handleLogin,
            handleSignOut,
            userCheckExist
            }}>

            {children}

        </UserContext.Provider>
    )
}