// src/pinball/Pinball.styled.tsx
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({});

export const HUD = styled("div")({
  background: "linear-gradient(#020024, #030337, #000)",
  borderBottom: "6px solid #9f9f9f",
  width: "100vw",
  height: "20vh",
  position: "absolute",
  top: -20,
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const Score = styled("div")({
  color: "orange",
  fontSize: "167px",
});

export const Bonus = styled("div")({
  color: "orange",
  fontSize: "22px",
});

export const Page = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const CanvasWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

export const Spinner = styled("div")({
  position: "absolute",
  paddingTop: "4rem",
  inset: 0,
  background: "black",
  zIndex: 50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "yellow",
  fontSize: "5rem",
});

export const Line = styled("hr")({
  width: "200px",
  border: "none",
  borderTop: "2px solid yellow",
  margin: "20px 0",
});

export const Controls = styled("div")({
  position: "absolute",
  zIndex: 40,
  right: 12,
  top: 12,
  display: "flex",
  gap: 8,
});

/* 🔊 Bouton Son */
export const SoundButton = styled("button")({
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 999,
  padding: "12px",
  borderRadius: "50%",
  border: "none",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(4px)",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.708)",
    color: "#000000",
  },
});
