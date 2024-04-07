"use client";
import React, { use, useState } from "react";
import firebaseComp from "@/lib/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { Endpoint } from "../../create-app/page";

export default function CreateApp({ params }: any) {
  const [appId, setAppId] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [status, setStatus] = useState("unstable");
  const db = firebaseComp.db;
  const appsReference = firebaseComp.appsRef;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAppId(params.appId);
    const lastChecked = new Date();
    const documentRef = doc(db, "apps", appId);
    try {
      const newEndpoint = {
        url,
        status,
        lastChecked,
      };
      try {
        const updatedEndpoints = [];
        await updateDoc(documentRef, {
          endpoints: arrayUnion(newEndpoint),
        });
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
      // Assuming you have already initialized Firebase app and Firestore
      await addDoc(collection(db, "endpoints"), newEndpoint);

      // Reset form fields
      setName("");
      setUrl("");
      setEndpoints([]);
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
          Url:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <br />
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="unstable">Unstable</option>
            <option value="stable">Stable</option>
          </select>
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
