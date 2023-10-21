import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(360deg, #b08968, #81b29a)",
        p: 6,
        mt: "auto",
        color: "white",
      }}
      component="footer"
    >
      <Container maxWidth="md">
        <Grid container spacing={20}>
          <Grid item sm={4}>
            <Box borderBottom={1}>Информация</Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                О компании
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                Новости
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                Контакты
              </Link>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box borderBottom={1}>Социальные сети</Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                <InstagramIcon />
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                <FacebookIcon />
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                <TwitterIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <Box borderBottom={1}>Помощь</Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                Наши партнеры
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                F.A.Q.
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.jusaninvest.kz/"
                color="inherit"
                underline="hover"
              >
                Вакансии
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
