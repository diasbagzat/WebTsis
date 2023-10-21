import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IncDec from "../../utlis";

export default function ProductDetail({ open, onClose, product }) {
  return (
    <Dialog open={open} variant="contained">
      <DialogTitle
        sx={{ background: "linear-gradient(360deg, #b08968, #81b29a)" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
          color="white"
        >
          {product.name}

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ background: "#fed9b7" }}>
        <Box
          sx={{
            background: "#fed9b7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ m: 4 }}>
            <img src={product.image} alt="product" width="300px" />
          </Box>
          <Typography variant="h4" color="#7c4008">
            {product.name}
          </Typography>
          <Typography variant="body" color="#7c4008" align="justify">
            {product.description}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <IncDec />
          <Button variant="contained" color="success">
            Добавить в корзину
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
