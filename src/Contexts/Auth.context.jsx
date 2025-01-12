import { createContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import PropTypes from "prop-types";

export const AuthContext = createContext({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export default function AuthContextProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { decodedToken, isExpired } = useJwt(
    sessionStorage.getItem("_tk") || ""
  );

  useEffect(() => {
    (decodedToken, isExpired);
    if (isExpired) {
      setLoggedIn(true);
    }
    if (!isExpired && decodedToken) {
      setLoggedIn(true);
    }
  }, [decodedToken, isExpired]);

  const value = {
    isLoggedIn,
    setLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: [PropTypes.node].isRequired,
};