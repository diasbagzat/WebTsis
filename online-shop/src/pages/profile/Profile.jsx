import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";

const profileInfo = {
  name: "ТОО «VOSTOK AGRO TRADE»",
  bin: "130340003020",
  iin: "7831231112",
  kpp: "7833211113",
  bankName: "АО «Народный Банк Казахстана», Алматы, Казахстан",
  bik: "0444356549",
  bankAccount: "KZ486010001000000010",
  address:
    "Казахстан, Восточно-казахстанская область, г. Усть-Каменогорск, ул. Протозанова, 123",
  head: "Тимуров Думан Сержанулы ",
  contact: "Косарева Анна Витальевна",
  email: "vostok@agrotrade.kz",
  phone: "8(7232)57-38-46",
};
export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (info) => {
    console.log(info);
  };
  const sumnum = "81723871283712837";
  return (
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
          p: 4,
          m: 6,
          borderRadius: 6,
          boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
        }}
      >
        <Typography variant="h3" color="#7c4008">
          Профиль компании
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <TextField
                helperText="Название организации"
                required
                fullWidth
                value={profileInfo.name}
                autoFocus
                {...register("Name", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                helperText="Руководитель"
                required
                fullWidth
                value={profileInfo.head}
                {...register("head", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="БИН"
                required
                fullWidth
                value={profileInfo.bin}
                {...register("bin", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="ИИН"
                required
                fullWidth
                value={profileInfo.iin}
                autoComplete="new-password"
                {...register("password", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="КПП"
                required
                fullWidth
                value={profileInfo.kpp}
                {...register("kpp", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="Банк"
                required
                fullWidth
                value={profileInfo.bankName}
                {...register("bankName", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="Счет"
                required
                fullWidth
                value={profileInfo.bankAccount}
                {...register("bankAccount", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="БИК"
                required
                fullWidth
                value={profileInfo.bik}
                {...register("bik", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="Юр. адрес"
                required
                fullWidth
                value={profileInfo.address}
                {...register("address", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="Контактное лицо"
                required
                fullWidth
                value={profileInfo.contact}
                {...register("contact", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="Телефон"
                required
                fullWidth
                value={profileInfo.phone}
                {...register("phone", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                helperText="Почта"
                required
                fullWidth
                value={profileInfo.email}
                {...register("email", {
                  required: "Поле обязательно для заполнения",
                })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            color="inherit"
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Сохранить
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
