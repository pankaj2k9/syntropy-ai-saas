"use client"
import React, { createContext, useState, useCallback } from 'react';

// Define the shape of your context state and the updater function
const defaultContextValue = {
  info: {
    isFirst: true,
    searchText: '',
  },
  updateInfo: (updates:any) => {}, // No-op function for the default value
};

// Create the context with the default value
export const Context = createContext(defaultContextValue);

const ContextProvider = ({ children }: { children:any }) => {
  // Set up state within the provider
  const [info, setInfo] = useState(defaultContextValue.info);

  // Function to modify the state, wrapped in useCallback to avoid unnecessary re-renders
  const updateInfo = useCallback((updates:any) => {
    setInfo((prevInfo) => ({ ...prevInfo, ...updates }));
  }, []);

  // Include both info and the function to update it in the context value
  const contextValue = {
    info,
    updateInfo,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
