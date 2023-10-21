import { createContext, useContext, useState } from "react";

export const UserCtx = createContext();
export const useUserCtx = () => useContext(UserCtx);

export const UserProvider = ({ children }) => {
  const [notLoginOrSignUp, setNotLoginOrSignUp] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const [showFavourite, setShowFavourite] = useState(false);

  const value = {
    notLoginOrSignUp,
    setNotLoginOrSignUp,
    cart,
    setCart,
    showCart,
    setShowCart,
    favourite,
    setFavourite,
    showFavourite,
    setShowFavourite,
  };
  return <UserCtx.Provider value={value}>{children}</UserCtx.Provider>;
};
