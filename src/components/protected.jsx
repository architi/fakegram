import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebaseApi/auth";

const Protected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signIn");
      }
    });
  }, []);
  return (
    <div>
      <h1>Hello there,why arent you using whatsapp? </h1>
      <Outlet />
    </div>
  );
};

export default Protected;

