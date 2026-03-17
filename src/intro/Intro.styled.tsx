// src/intro/Intro.styled.tsx
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const IntroContainer = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const Video = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const AudioToggleButton = styled("button")({
  position: "absolute",
  top: 20,
  right: 20,
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: 10,
  cursor: "pointer",
  zIndex: 10,
});

export const SkipButton = styled(Button)({
  "--btn-default-bg": "#FAC921",
  "--btn-padding": "10px 28px",
  "--btn-hover-bg": "#000000",
  "--btn-transition": ".3s",
  "--btn-letter-spacing": ".12rem",
  "--btn-animation-duration": "1.2s",
  "--btn-shadow-color": "rgba(0, 0, 0, 0.25)",
  "--btn-shadow": "0 4px 20px 0 var(--btn-shadow-color)",
  "--hover-btn-color": "#FAC921",
  "--default-btn-color": "#000000",
  "--font-size": "1.5vw",
  "--font-weight": "700",
  "--font-family": "Menlo, Roboto Mono, monospace",

  position: "absolute",
  bottom: 40,
  left: "50%", // 👈 centrage horizontal
  transform: "translateX(-50%)", // 👈 centrage horizontal

  // boxSizing: "border-box",
  padding: "var(--btn-padding)",
  borderRadius: "14px", // 👈 légèrement arrondi
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--default-btn-color)",
  font: "var(--font-weight) var(--font-size) var(--font-family)",
  background: "var(--btn-default-bg)",
  border: "none", // 👈 pas de border
  outline: "none", // 👈 retire aussi l'outline MUI
  cursor: "pointer",
  transition: "var(--btn-transition)",
  overflow: "hidden",
  boxShadow: "var(--btn-shadow)",
  textTransform: "none",
  whiteSpace: "nowrap", // 👈 évite le retour à la ligne

  // Surcharge des styles MUI qui peuvent forcer une border
  "&.MuiButton-root": {
    border: "none",
    outline: "none",
    minWidth: "unset", // 👈 pas de taille forcée par MUI
  },

  "& span": {
    letterSpacing: "var(--btn-letter-spacing)",
    transition: "var(--btn-transition)",
    position: "relative",
  },
  "& span::before": {
    position: "absolute",
    content: '""',
  },
  "&:hover": {
    background: "var(--btn-hover-bg)",
    boxShadow: "0 6px 24px rgba(250, 201, 33, 0.4)", // 👈 glow jaune au hover
  },
  "&:hover span": {
    color: "var(--hover-btn-color)",
  },
  "&:hover span::before": {
    animation: "chitchat linear both var(--btn-animation-duration)",
  },
  "@keyframes chitchat": {
    "0%": { content: '"#"' },
    "10%": { content: '"^{"' },
    "20%": { content: '"#$_"' },
    "30%": { content: '"/<_>"' },
    "40%": { content: '"?{4@%"' },
    "60%": { content: '"?{%:%"', right: 0 },
    "80%": { content: '"{0%"', right: 0 },
    "100%": { content: '""', right: 0 },
  },
});
