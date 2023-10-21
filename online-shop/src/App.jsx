import "./App.css";
import { useState, useEffect } from "react";
import { useUserCtx } from "./UserContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/main/Main";
import ProductsPage from "./pages/productsPage/ProductsPage";

const theme = createTheme({
  typography: {
    fontFamily: `"Nunito","Roboto"`,
  },
});

function App() {
  const { notLoginOrSignUp, setNotLoginOrSignUp } = useUserCtx();
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

        {notLoginOrSignUp && <Header />}

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        {notLoginOrSignUp && <Footer />}
      </ThemeProvider>
    </div>
  );
}

export default App;
