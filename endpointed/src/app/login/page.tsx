"use client";

import React, { useState, useContext, useEffect } from "react";
import firebaseComp from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "@/context/userContext";
// Initialize Firebase

const LoginPage: React.FC = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = firebaseComp.auth;
  const { user, setUser }: any = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        inputEmail,
        password
      );
      setIsLoggedIn(true);
      const { uid, accessToken, email, displayName }: any = response.user;
      const userData = {
        accessToken,
        email,
        displayName,
        uid,
        isLoggedIn,
      };

      // Set the context to the user uid
      setUser(userData);
      // Handle successful login
      console.log("Logged in:", response.user);
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="inputEmail"
        placeholder="Email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
