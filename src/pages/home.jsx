import React from 'react'
import { authApi } from '../firebaseApi/auth';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
 const navigate = useNavigate();
  return (
    <div>
        
      <button
        onClick={ async () => {
         await authApi.signOut();
         navigate("/signIn");
        }}
      >
        SignOut
      </button>

      <button
        onClick={() => {
        navigate("/signIn");
        }}
      >
        signIn
      </button>

      <button
        onClick={() => {
           navigate("/signUp");
        }}
      >
        signUp
      </button>

      
    </div>
  );
}

export default HomePage
