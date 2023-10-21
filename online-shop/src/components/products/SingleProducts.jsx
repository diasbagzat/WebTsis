import { Avatar, Box, Stack, Typography } from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";

import Button from "@mui/material/Button";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail/ProductDetail";

import useCart from "../../hooks/useCart";
import useFavourite from "../../hooks/useFavourite";

const SingleProduct = ({ product }) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  const { addToCart, addToCartText } = useCart(product);
  const { addToFavourite, addToFavouriteStatus } = useFavourite(product);
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        height="100%"
      >
        <Box sx={{ flex: 1 }}>
          <Avatar
            src={`${product.image}`}
            alt="Product"
            width="200px"
            sx={{ width: "250px", height: "250px" }}
          />
        </Box>
        <Box sx={{ mt: "auto" }}>
          <Typography color="#ffffff" variant="h5">
            {product.name}
          </Typography>
          <Typography color="#ffffff">{`${product.price} KZT`}</Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems={"center"}
            color="white"
          >
            <IconButton color="inherit" onClick={addToFavourite}>
              {addToFavouriteStatus}
            </IconButton>
            <IconButton color="inherit">
              <ShareIcon />
            </IconButton>
          </Stack>

          <Stack direction="column" gap="5px" width="300px">
            <Button
              variant="contained"
              color="success"
              onClick={() => showProductDetailDialog()}
            >
              Подробнее
            </Button>
            <Button variant="contained" color="success" onClick={addToCart}>
              {addToCartText}
            </Button>
          </Stack>
          <ProductDetailDialog product={product} />
        </Box>
      </Box>
    </>
  );
};

export default SingleProduct;
