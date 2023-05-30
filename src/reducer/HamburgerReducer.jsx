import { createContext, useState } from "react";

export const HamburgerContext = createContext();

const HamburgerContextProvider = function ({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <HamburgerContext.Provider value={{ open, setOpen }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerContextProvider;
