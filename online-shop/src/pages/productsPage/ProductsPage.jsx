import { IconButton, Paper, Slide, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { useState } from "react";

import img3 from "../../assets/background.png";
import feed from "../../assets/feed.png";
import seed from "../../assets/seed.png";
import cow from "../../assets/cow.png";
import vehicle from "../../assets/vehicle.png";
import { products } from "../../data/data";
import SingleProduct from "../../components/products/SingleProducts";
import Cart from "../../components/cart/Cart";
import Favourite from "../../components/favourite/Favourite";
import CategoryBar from "../../components/categoryBar/CategoryBar";
import { useUserCtx } from "../../UserContext";

const messages = [
  { img: `${vehicle}`, text: "Фермерское оборудование" },
  { img: `${seed}`, text: "Семена" },
  { img: `${feed}`, text: "Корма для животных" },
  { img: `${cow}`, text: "Сельскохозяйственные животные" },
];

const ProductsPage = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  const { setNotLoginOrSignUp } = useUserCtx();
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setNotLoginOrSignUp(true);
  }, []);

  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      md={4}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      justifyContent="stretch"
      sx={{ mb: 4 }}
    >
      <Paper
        sx={{
          p: 2,
          background: "linear-gradient(360deg, #b08968, #81b29a)",
          height: "100%",
        }}
      >
        <SingleProduct product={product} />
      </Paper>
    </Grid>
  ));

  return (
    <>
      <Cart />
      <Favourite />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#fed9b7",
          px: 30,
        }}
      >
        <Box
          overflow="hidden"
          sx={{
            bgcolor: "#fdfcdc",
            height: "550px",
            p: 4,
            m: 6,
            borderRadius: 6,
            boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
            backgroundImage: `url(${img3})`,
            backgroundSize: "100% 150%",
          }}
        >
          <Typography
            component="h4"
            variant="h2"
            align="center"
            color="#7c4008"
          >
            Товары для агробизнеса
          </Typography>

          <Slide
            direction={show ? "left" : "right"}
            in={show}
            timeout={{ enter: 500, exit: 300 }}
          >
            <Box
              sx={{
                display: "flex",
                p: 4,
                mt: 4,
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
                borderRadius: 6,
              }}
            >
              <img
                width="150px"
                height="150px"
                src={messages[messageIndex].img}
                alt="product"
              />
              <Typography color="#7c4008" component="h5" variant="h4">
                {messages[messageIndex].text}
              </Typography>
            </Box>
          </Slide>
        </Box>

        <Box display="flex">
          <CategoryBar />
          <Container sx={{ mb: 4 }} maxWidth="500px">
            <Box
              sx={{
                display: "flex",
                p: 2,
                mx: 6,
                mb: 4,
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
                borderRadius: 6,
              }}
            >
              <TextField
                sx={{ width: "100%" }}
                color="success"
                placeholder="Поиск..."
              />
              <IconButton sx={{ px: 1, alignSelf: "center" }}>
                <SearchIcon />
              </IconButton>
            </Box>
            <Container maxWidth="lg">
              <Grid container justifyContent="center" spacing={2}>
                {renderProducts}
              </Grid>
            </Container>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ProductsPage;
