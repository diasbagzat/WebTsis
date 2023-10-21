import { Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";

import Button from "@mui/material/Button";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productDetail/ProductDetail";

const SingleProduct = ({ product, isFav }) => {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail);
  return (
    <>
      <Box
        disaply="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <img src={`${product.image}`} alt="Product" width="300px" />
        <Typography color="#7c4008">{product.name}</Typography>
        <Typography color="#7c4008">{`${product.price} KZT`}</Typography>

        <Stack direction="row" justifyContent="center" alignItems={"center"}>
          <IconButton color="success">
            {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton color="success">
            <ShareIcon />
          </IconButton>
        </Stack>

        <Stack direction="column" gap="5px">
          <Button
            variant="contained"
            color="success"
            width="300px"
            onClick={() => showProductDetailDialog()}
          >
            Подробнее
          </Button>
          <Button variant="contained" color="success" width="300px">
            Добавить в корзину
          </Button>
        </Stack>
        <ProductDetailDialog product={product} />
      </Box>
    </>
  );
};

export default SingleProduct;
