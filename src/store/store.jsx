import React, { createContext, useContext, useState } from 'react';

// Create a new context
const GlobalStateContext = createContext();

// Create a provider component to wrap your app
export const GlobalStateProvider = ({ children }) => {
  const [sidebarPage, setSidebarPage] = useState('dashboard');

  return (
    <GlobalStateContext.Provider value={{ sidebarPage, setSidebarPage }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to access the global state
export const useGlobalState = () => {
  const { sidebarPage, setSidebarPage } = useContext(GlobalStateContext);
  return [sidebarPage, setSidebarPage];
};