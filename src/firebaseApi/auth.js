import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth,signOut} from "firebase/auth";
import { app } from "./firebase.js";

export const auth = getAuth(app);

export const authApi = {
  async signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    } catch (error) {
        const errorCode =error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
    }
  },

  async signIn(email, password) {
    try {
        const userCreds = await signInWithEmailAndPassword(auth, email, password);
        const {user} = userCreds;
    } catch (error) {
        console.log(error.code, error.message);
    }
  },

  async signOut(){
    await signOut(auth);
  }
};


