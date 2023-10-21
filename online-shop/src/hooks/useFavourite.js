import { useUserCtx } from "../UserContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function useFavourite(product) {
  const { favourite, setFavourite } = useUserCtx();
  const addToFavourite = () => {
    favourite.findIndex((f) => f.id === product.id) >= 0
      ? setFavourite(favourite.filter((f) => f.id !== product.id))
      : setFavourite((favourite) => [...favourite, product]);
  };
  const addToFavouriteStatus =
    favourite.findIndex((c) => c.id === product.id) >= 0 ? (
      <FavoriteIcon />
    ) : (
      <FavoriteBorderIcon />
    );

  return { addToFavourite, addToFavouriteStatus };
}

export default useFavourite;
