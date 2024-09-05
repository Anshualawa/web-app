import React, { createContext, useState, useContext } from 'react';

// Create a Context for layout
const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  // Remove sidebar-related state
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <LayoutContext.Provider
      value={{
        // isSidebarOpen,
        // toggleSidebar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
