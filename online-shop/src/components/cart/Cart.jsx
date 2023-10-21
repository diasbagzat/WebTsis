import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Paper,
  Typography,
} from "@mui/material";
import { useUserCtx } from "../../UserContext";
import Box from "@mui/material/Box";
import IncDec from "../../utlis";

export default function Cart() {
  const { cart, setShowCart, showCart } = useUserCtx();

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ py: 2 }}
        justifyContent="space-between"
        alignItems="start"
      >
        <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="subtitle2" align="justify">
            {item.description}
          </Typography>
          <Typography variant="h6">Цена - {item.price}KZT</Typography>
          <IncDec />
        </Box>
      </Box>
      <Divider variant="fullWidth" color="black" />
    </Box>
  ));

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 600,
          background: "#fed9b7",
        },
      }}
    >
      {cart.length > 0 ? (
        <Box
          display="flex"
          sx={{ p: 2 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Корзина</Typography>
          <Paper sx={{ p: 2, mt: 2 }}>{cartContent}</Paper>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mt: 4 }}
          >
            Перейти к оплате
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          sx={{ p: 2 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" color="GrayText">
            Ваша корзина пуста!
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}
