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

export default function Favourite() {
  const { favourite, setShowFavourite, showFavourite } = useUserCtx();

  const favouriteContent = favourite.map((item) => (
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
        </Box>
      </Box>
      <Divider variant="fullWidth" color="black" />
    </Box>
  ));

  return (
    <Drawer
      open={showFavourite}
      onClose={() => setShowFavourite(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 600,
          background: "#fed9b7",
        },
      }}
    >
      {favourite.length > 0 ? (
        <Box
          display="flex"
          sx={{ p: 2 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Избранное</Typography>
          <Paper sx={{ p: 2, mt: 2 }}>{favouriteContent}</Paper>
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
            Сохраняйте товары из каталога
          </Typography>
        </Box>
      )}
    </Drawer>
  );
}
