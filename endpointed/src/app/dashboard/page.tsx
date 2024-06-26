"use client";
import React, { useState } from "react";
import { FC } from "react";
import { collection, query, getDocs, limit } from "firebase/firestore";
import firebaseComp from "@/lib/firebase";
import AppElement from "@/components/AppElement";

async function fetchCollectionData() {
  const querySnapshot = await getDocs(collection(firebaseComp.db, "apps"));

  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id, // Get document id
    ...doc.data(), // Spread operator to get the rest of the data
  }));

  return documents;
}

const Apps = ({ params }: any) => {
  const [appsArray, setAppsArray] = useState([]);
  fetchCollectionData().then((documents) => {
    console.log(documents);
  });
  return <div>Dashboard(works only on terminal)</div>;
};
export default Apps;
