import React, { createContext } from "react";

// Create context
export const AuthDataContext = createContext();

function AuthContextProvider({ children }) {
  const serverUrl = "http://localhost:8000";

  const value = {
    serverUrl,
  };

  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContextProvider;
