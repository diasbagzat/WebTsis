import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Badge,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useUserCtx } from "../../UserContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const {
    setNotLoginOrSignUp,
    cart,
    setShowCart,
    favourite,
    setShowFavourite,
  } = useUserCtx();
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
    <Box sx={{ position: "sticky", top: "0", zIndex: 999 }}>
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
          <img alt="Farm logo" width="75px" src={logo} />
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
            <Box display="flex">
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <ListItemButton onClick={() => setShowCart(true)}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Badge badgeContent={cart && cart.length} color="warning">
                      <ShoppingCartIcon htmlColor="white" />
                    </Badge>
                  </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem color="white" />
                <ListItemButton onClick={() => setShowFavourite(true)}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Badge
                      badgeContent={favourite && favourite.length}
                      color="warning"
                    >
                      <FavoriteIcon htmlColor="white" />
                    </Badge>
                  </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem color="white" />
                <ListItemButton onClick={() => navigate("/profile")}>
                  <ListItemIcon
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <PersonIcon htmlColor="white" />
                  </ListItemIcon>
                </ListItemButton>
              </List>
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
