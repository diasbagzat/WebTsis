import { Box } from "@mui/material";
import { Divider, List, ListItemButton, ListItem } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const categoryBar = [
  "Фермерское оборудование",
  "Сельхозтехника",
  "Запчасти",
  "Зерно",
  "Семена",
  "Посадочные материалы",
  "Средства защиты растений",
  "Удобрения",
  "Корма",
  "Сельскохозяйственные животные",
];

export default function CategoryBar() {
  const CategoryBarContent = categoryBar.map((category, index) => (
    <ListItemButton key={category}>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {category}
        <ArrowForwardIosIcon fontSize="small" />
      </ListItem>
    </ListItemButton>
  ));
  return (
    <Box
      sx={{
        height: "700px",
        p: 2,
        ml: 6,
        boxShadow: "0.5px 0.5px 25px 5px  #426c4b",
        borderRadius: 6,
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {CategoryBarContent}
      </List>
    </Box>
  );
}
