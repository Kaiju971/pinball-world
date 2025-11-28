// src/intro/Intro.styled.tsx
import { styled } from "@mui/material/styles";

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
