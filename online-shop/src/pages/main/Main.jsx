import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import img1 from "../../assets/wheat.png";
import img2 from "../../assets/farmer.png";
import { List, ListItem } from "@mui/material";
import { useUserCtx } from "../../UserContext";

const MainPage = () => {
  const { setNotLoginOrSignUp } = useUserCtx();
  const navigate = useNavigate();
  function handleSignIn() {
    setNotLoginOrSignUp((prev) => !prev);
    navigate("/signUp");
  }
  function handleSignUp() {
    setNotLoginOrSignUp((prev) => !prev);
    navigate("/signUp");
  }
  return (
    <>
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
          sx={{
            bgcolor: "#fdfcdc",
            pt: 8,
            pb: 6,
            px: 10,
            m: 6,
            borderRadius: 6,
            boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
          }}
        >
          <Container
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box>
              <img alt="Company logo" height="300px" src={img1} />
            </Box>
            <Box>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#7c4008"
                gutterBottom
              >
                О компании
              </Typography>
              <Typography
                variant="h5"
                align="justify"
                color="#7c4008"
                paragraph
              >
                Мы, частные инвесторы, которые имеют опыт в различных сферах,
                включая оптовую реализацию сельхозпродукции как из Казахстана на
                экспорт, так и на внутренний рынок. У нас есть опыт ведения
                бизнеса и видение ситуации в отрасли с точки зрения
                предпринимателей.
                <br />
                <br />
                Наша миссия — развивать сельское хозяйство через внедрение
                цифровых технологий.
              </Typography>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "#fdfcdc",
            pt: 8,
            pb: 6,
            px: 10,
            m: 6,
            borderRadius: 6,
            boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
          }}
        >
          <Container
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#7c4008"
                gutterBottom
              >
                Как это работает?
              </Typography>
              <Typography
                variant="h5"
                align="justify"
                color="#7c4008"
                paragraph
              >
                Используйте нашу площадку для эффективного ведения бизнеса в
                сельском хозяйстве. Для этого Вам необходимо:
              </Typography>
              <List
                sx={{
                  listStyleType: "number",
                  fontSize: "20px",
                  color: "#7c4008",
                }}
              >
                <ListItem sx={{ display: "list-item" }}>
                  Зарегистрироваться на платформе.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Выбрать товар для покупки или выставить товар на продажу.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Указать цену и количество.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Сообщить нам дополнительные детали о желаемом способе
                  доставке.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Произвести оплату маркетплейсу.
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Ожидать связи с нашими сотрудниками по почте или указанному
                  Вами номеру телефона.
                </ListItem>
              </List>
            </Box>
            <Box>
              <img alt="Company logo" height="300px" src={img2} />
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "#fdfcdc",
            pt: 8,
            pb: 6,
            px: 10,
            m: 6,
            borderRadius: 6,
            boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
          }}
        >
          <Container
            sx={{
              display: "flex",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#7c4008"
                gutterBottom
              >
                Давайте начнём!
              </Typography>
              <Typography
                variant="h5"
                align="justify"
                color="#7c4008"
                paragraph
              >
                Мы открываем двери тысячам проверенных покупателей и продавцов.
                Благодаря нашему строгому соблюдению требований клиентов мы
                гарантируем, что только надежные пользователи получат доступ к
                нашему цифровому рынку.
              </Typography>
            </Box>
          </Container>
          <Box sx={{ ml: "auto" }}>
            <Button
              color="success"
              variant="outlined"
              size="large"
              sx={{ mx: 1 }}
              onClick={handleSignIn}
            >
              Авторизация
            </Button>
            <Button
              color="success"
              variant="outlined"
              size="large"
              sx={{ mx: 1 }}
              onClick={handleSignUp}
            >
              Регистрация
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default MainPage;
