"use client";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import firebaseComp from "@/lib/firebase";

const db = getFirestore(firebaseComp.app);

const RegisterPage = () => {
  const auth = firebaseComp.auth;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    if (password === passwordConfirm && email !== "" && username !== "") {
      console.log(email, password, passwordConfirm);
      try {
        // Create user with email and password
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Add user data to Firestore
        await addDoc(collection(db, "users"), {
          email,
          username,
          uid: user.uid,
        });

        console.log("User registered successfully!");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

      <button onClick={() => handleSubmit(email, password, passwordConfirm)}>
        Register
      </button>
    </>
  );
};

export default RegisterPage;
