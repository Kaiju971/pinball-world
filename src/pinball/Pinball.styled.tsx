// src/pinball/Pinball.styled.tsx
import { styled } from "@mui/material/styles";

export const Page = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  // background: "#000",
});

export const CanvasWrapper = styled("div")({
  width: "100%",
  height: "100%",
});

export const Spinner = styled("div")({
  width: "100vw",
  height: "50vh",
  backgroundColor: "black",
  color: "yellow",
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
