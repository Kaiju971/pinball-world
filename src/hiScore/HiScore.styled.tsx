import { styled } from "@mui/material/styles";
import background from "../assets/images/HiScoresBackground.jpg";

export const MainContainer = styled("div")({
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  width: "100vw",
  height: "100vh",
  padding: "40px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = styled("h1")({
  fontSize: "48px",
  letterSpacing: "4px",
  marginBottom: "24px",
  textShadow: "0 0 10px #ffea00, 0 0 25px #ffaa00",
  fontFamily: '"Press Start 2P", monospace',
});

export const Controls = styled("div")({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
});

export const Button = styled("button")({
  background: "transparent",
  border: "2px solid #ffea00",
  color: "#ffea00",
  padding: "10px 16px",
  borderRadius: 8,
  cursor: "pointer",
  fontFamily: '"Press Start 2P", monospace',
  letterSpacing: 1,
  "&:hover": {
    boxShadow: "0 0 14px #ffea00",
    transform: "translateY(-2px)",
  },
});

/* 🔊 Bouton Son */
export const SoundButton = styled("button")({
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
  "&:hover": {
    background: "rgba(255, 255, 255, 0.708)",
    color: "#000000",
  },
});

export const ScoreGrid = styled("div")({
  width: "90%",
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "24px",
});

export const ScoreCard = styled("div")({
  background: "#111111e0",
  border: "2px solid #ffea00",
  padding: "18px",
  borderRadius: "12px",
  fontFamily: '"Press Start 2P", monospace',
  color: "#fff",
  boxShadow: "0 0 12px #ffaa00",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const TableName = styled("h2")({
  fontSize: "20px",
  textAlign: "center",
  marginBottom: "12px",
  textShadow: "0 0 6px #ffea00",
});

export const PlayerList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: "16px",
  ".player": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

/* neon animated highlight for the top entry */
export const NeonTop = styled("div")({
  color: "#ffea00",
  textShadow: "0 0 8px #ffea00, 0 0 16px #ffae00, 0 0 40px rgba(255,174,0,0.5)",
  transition: "box-shadow 0.3s",
});

export const Pinball = styled("h1")({
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  letterSpacing: "50px",
  fontSize: "50px",
  width: "100%",
  height: "100%",
});
