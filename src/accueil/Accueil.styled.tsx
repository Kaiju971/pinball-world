import { styled } from "@mui/material/styles";

export const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // 4 colonnes
  gridTemplateRows: "1fr", // hauteur flexible
  width: "100vw",
  height: "100vh", // prend tout l'écran
  gap: "2px", // espace entre les images
});

export const GridItem = styled("div")({
  width: "100%",
  height: "100%",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
});
