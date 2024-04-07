import React from "react";
import { FC } from "react";
import { collection, query, getDocs, limit } from "firebase/firestore";
import firebaseComp from "@/lib/firebase";
interface AppProps {
  params: {
    appId: string;
  };
}

async function fetchCollectionData() {
  const querySnapshot = await getDocs(collection(firebaseComp.db, "apps"));

  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id, // Get document id
    ...doc.data(), // Spread operator to get the rest of the data
  }));

  return documents;
}

export async function generateStaticParams() {
  const documents = await fetchCollectionData();
  return documents.map((document) => {
    return {
      document,
    };
  });
}

const App: FC<AppProps> = ({ params }) => {
  fetchCollectionData().then((documents) => {
    console.log(documents);
  });

  return <div>{params.appId}</div>;
};
export default App;
