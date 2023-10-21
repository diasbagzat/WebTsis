import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useUserCtx } from "../../UserContext";

const Header = () => {
  const { setNotLoginOrSignUp } = useUserCtx();
  const navigate = useNavigate();
  function handleSignIn() {
    setNotLoginOrSignUp(true);
    navigate("/signIn");
  }
  function handleSignUp() {
    setNotLoginOrSignUp(true);
    navigate("/signUp");
  }
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ p: 2, background: "linear-gradient(360deg, #b08968, #81b29a)" }}
      >
        <Toolbar
          sx={{
            disaply: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <img alt="Farm logo" width="150px" src={logo} />
          <Button
            color="inherit"
            variant="outlined"
            size="large"
            sx={{ mx: 2 }}
            onClick={() => navigate("/")}
          >
            Главная
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            size="large"
            sx={{ mx: 2 }}
            onClick={() => navigate("/products")}
          >
            Маркетплейс
          </Button>

          <Box sx={{ ml: "auto" }}>
            <Button
              color="inherit"
              variant="outlined"
              size="large"
              sx={{ mx: 1 }}
              onClick={handleSignIn}
            >
              Авторизация
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              size="large"
              sx={{ mx: 1 }}
              onClick={handleSignUp}
            >
              Регистрация
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
