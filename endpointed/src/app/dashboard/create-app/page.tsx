"use client";
import React, { useState } from "react";
import firebaseComp from "@/lib/firebase";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { url } from "inspector";

const createEndpoint = (url: string): Endpoint => {
  return {
    id: "",
    url,
    status: "up",
    lastChecked: new Date(),
  };
};

export type Endpoint = {
  id: string;
  url: string;
  status: "up" | "down";
  responseTime?: number; // in milliseconds, optional
  lastChecked: Date;
};
export type App = {
  id: string;
  name: string;
  endpoints: Endpoint[];
  status: string;
};

export default function CreateApp() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const endpoints: Endpoint[] = [];
  const [status, setStatus] = useState("unstable");

  const db = getFirestore(firebaseComp.app);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    endpoints.push(createEndpoint(url));
    try {
      const appData = {
        name,
        description,
        endpoints,
        status,
      };

      // Assuming you have already initialized Firebase app and Firestore
      await addDoc(collection(db, "apps"), appData);

      // Reset form fields
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error creating app:", error);
    }
  };

  return (
    <div>
      <h2>Create App</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          First
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
