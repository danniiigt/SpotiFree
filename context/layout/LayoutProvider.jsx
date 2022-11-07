import React from "react";
import { LayoutContext } from "./";

export const LayoutProvider = ({ children }) => {
  const layoutState = {
    drawerWidth: 80,
    footerPlayerHeight: 100,
  };

  return (
    <LayoutContext.Provider value={layoutState}>
      {children}
    </LayoutContext.Provider>
  );
};
