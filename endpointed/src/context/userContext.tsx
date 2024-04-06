"use client";

import React, { createContext, useState, ReactNode } from "react";

const userReducer = (state: {}, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, user: null, isLoggedIn: false };

    default:
      return state;
  }
};

export const UserContext = createContext({});

type userContext = {
  accessToken: string;
  email: string;
  displayName: string;
  uid: string;
  isLoggedIn: Boolean;
};

const initialState = {
  user: {},
  isLoggedIn: false,
};

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
