import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  background: "radial-gradient(circle at center,#000 20%,#020b1c 80%)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  color: "white",
  fontFamily: "Orbitron, sans-serif",
});


export const Title = styled("h1")({
  fontSize: "60px",
  letterSpacing: "6px",

  color: "#00d9ff",

  textShadow: "0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 40px #0099ff",

  marginBottom: "40px",
});

export const Subtitle = styled("div")({
  fontSize: "18px",
  letterSpacing: "3px",

  color: "#00aaff",

  marginBottom: "60px",
});

export const SwitchContainer = styled("div")<{ active: boolean }>({
  cursor: "pointer",

  width: "220px",
  height: "80px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
});

export const SwitchTrack = styled("div")<{ active: boolean }>(({ active }) => ({
  width: "200px",
  height: "60px",

  borderRadius: "40px",

  background: active
    ? "linear-gradient(90deg,#003b1f,#006c3a)"
    : "linear-gradient(90deg,#0c1d3a,#001433)",

  border: `2px solid ${active ? "#00ff9c" : "#00aaff"}`,

  boxShadow: active ? "0 0 20px #00ff9c" : "0 0 20px #00aaff",

  position: "relative",

  transition: "all 0.4s ease",
}));

export const SwitchThumb = styled("div")<{ active: boolean }>(({ active }) => ({
  width: "70px",
  height: "70px",

  borderRadius: "50%",

  position: "absolute",
  top: "-5px",

  left: active ? "135px" : "-5px",

  background: active
    ? "radial-gradient(circle,#00ff9c,#004d2c)"
    : "radial-gradient(circle,#00aaff,#002c55)",

  boxShadow: active ? "0 0 25px #00ff9c" : "0 0 25px #00aaff",

  transition: "all 0.4s cubic-bezier(.4,2,.3,1)",
}));

export const LabelLeft = styled("div")<{ active: boolean }>(({ active }) => ({
  position: "absolute",

  left: "25px",
  top: "50%",
  transform: "translateY(-50%)",

  fontSize: "14px",
  letterSpacing: "2px",

  color: active ? "#00ff9c" : "#004a65",

  textShadow: active ? "0 0 10px #00ff9c" : "none",

  transition: "all .3s",
}));

export const LabelRight = styled("div")<{ active: boolean }>(({ active }) => ({
  position: "absolute",

  right: "20px",
  top: "50%",
  transform: "translateY(-50%)",

  fontSize: "14px",
  letterSpacing: "2px",

  color: !active ? "#00aaff" : "#00334d",

  textShadow: !active ? "0 0 10px #00aaff" : "none",

  transition: "all .3s",
}));

export const Hint = styled("div")({
  marginTop: "60px",

  fontSize: "14px",
  letterSpacing: "4px",

  color: "#888",
  cursor: "pointer",
  animation: "blink 1.5s infinite",

  "@keyframes blink": {
    "0%,100%": { opacity: 1 },
    "50%": { opacity: 0.3 },
  },
});


export const LanguageContainer = styled("div")({
  display: "flex",
  gap: "15px",
  marginBottom: "40px", // Espace avant le subtitle
});

export const LanguageButton = styled("button")<{ active: boolean }>(({ active }) => ({
  background: active
    ? "radial-gradient(circle, #00ff9c, #004d2c)"
    : "radial-gradient(circle, #00aaff, #002c55)",
  color: "white",
  border: "none",
  borderRadius: "30px",
  padding: "8px 20px",
  fontSize: "14px",
  fontFamily: "Orbitron, sans-serif",
  letterSpacing: "2px",
  cursor: "pointer",
  boxShadow: active
    ? "0 0 20px #00ff9c, 0 0 40px #006c3a"
    : "0 0 20px #00aaff, 0 0 40px #002c55",
  transition: "all 0.3s ease",
  textTransform: "uppercase",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: active
      ? "0 0 30px #00ff9c, 0 0 60px #006c3a"
      : "0 0 30px #00aaff, 0 0 60px #002c55",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "30px",
    border: `1px solid ${active ? "#00ff9c" : "#00aaff"}`,
    opacity: 0.8,
    transition: "all 0.3s ease",
  },
}));