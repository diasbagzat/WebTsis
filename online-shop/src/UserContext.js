import { createContext, useContext, useState } from "react";

export const UserCtx = createContext();
export const useUserCtx = () => useContext(UserCtx);

export const UserProvider = ({ children }) => {
  const [notLoginOrSignUp, setNotLoginOrSignUp] = useState(true);
  const value = { notLoginOrSignUp, setNotLoginOrSignUp };
  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};
