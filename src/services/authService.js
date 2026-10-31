import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
    export const signupUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    export const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    export const logoutUser = () =>{
        return signOut(auth)
    }
    
  
