import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const authApi = {
  async signUp(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem("token",user.accessToken);
  },
  async signIn(email, password) {
    const userCreds = await signInWithEmailAndPassword(auth, email, password);
    const {user} = userCreds;
    localStorage.setItem("token",user.accessToken);
  },
   getUser(){
    const user = auth.currentUser;
    console.log(user);
    return user;
  }
};
// authApi.signUp("test@example.com", "password123");
