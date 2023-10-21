import "./App.css";
import { useState, useEffect } from "react";
import UserCtx from "./UserContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/main/Main";

const theme = createTheme({
  typography: {
    fontFamily: `"Nunito","Roboto"`,
  },
});

function App() {
  const initialState = useState({
    firstName: "Homer",
    familyName: "Simpson",
  });
  const [notLoginOrSignUp, setNotLoginOrSignUp] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNotLoginOrSignUp(true);
    }
  }, [location.pathname]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserCtx.Provider value={initialState}>
          {notLoginOrSignUp && (
            <Header setNotLoginOrSignUp={setNotLoginOrSignUp} />
          )}
          <Routes>
            <Route
              path="/"
              element={<MainPage setNotLoginOrSignUp={setNotLoginOrSignUp} />}
            />
            <Route
              path="/signIn"
              element={<SignIn setNotLoginOrSignUp={setNotLoginOrSignUp} />}
            />
            <Route
              path="/signUp"
              element={<SignUp setNotLoginOrSignUp={setNotLoginOrSignUp} />}
            />
          </Routes>
          {notLoginOrSignUp && <Footer />}
        </UserCtx.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
