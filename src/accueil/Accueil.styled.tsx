import { styled } from "@mui/material/styles";
import { Color } from "three";

export const MainContainer = styled("div")({
  width: "100vw",
  maxHeight: "100vh",
  overflow: "hidden",
  position: "relative",
});

export const GridContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  width: "100vw",
  height: "90vh",
  //   gap:"0.1rem",
  position: "relative",
});

export const GridItem = styled("div")({
  width: "100%",
  height: "100%",
  cursor: "pointer",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    // objectFit: "cover",
    transition: "transform 0.3s",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
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
    color:"#000000",
  },
});

export const Marquee = styled("div")<{
  speed?: number;
  color?: string;
  fontSize?: number | string;
}>(({ speed = 15, color = "#00ffea", fontSize = 30 }) => ({
  // width: "450px",
//   lineHeight: "40px",
    //  height: "8vh",
  backgroundColor: "black",
  color: color,
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "relative",
  boxSizing: "border-box",

  // Bande interne qui contient toutes les phrases
  "& .track": {
    display: "inline-flex",
    gap: "80px", // espace entre les phrases
    paddingLeft: "100%",
    animation: `marquee ${speed}s linear infinite`,
  },
  "& .instruc": {
    display: "inline-flex",
    gap: "80px", // espace entre les phrases
    paddingLeft: "100%",
    animation: `marquee ${speed}s linear infinite`,
  },

  "& p": {
    // paddingTop:"1rem",
    margin: 0,
    fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    textShadow: `
      0 0 6px ${color},
      0 0 12px ${color},
      0 0 20px ${color},
      0 0 40px ${color}
    `,
    fontFamily: "'Press Start 2P', monospace",
    animation: `glowPulse 2.5s ease-in-out infinite,
                crtFlicker 0.12s infinite`,
  },

  "@keyframes marquee": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-100%)" },
  },

  "@keyframes glowPulse": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0.85 },
    "100%": { opacity: 1 },
  },

  "@keyframes crtFlicker": {
    "0%": { opacity: 0.96 },
    "50%": { opacity: 0.88 },
    "100%": { opacity: 1 },
  },
}));

export const MarqueeSequential = styled("div")<{
  color?: string;
  fontSize?: number | string;
  duration?: number; // durée affichage d'une ligne
}>(({ color = "yellow", fontSize = 30, duration = 5000 }) => {
  const totalLines = 6; // nombre de lignes, tu peux changer si besoin
  return {
    width: "100%",
    height: "7vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .line": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      textAlign: "center",
      opacity: 0,
      fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
      textShadow: `
        0 0 6px ${color},
        0 0 12px ${color},
        0 0 18px ${color},
        0 0 24px ${color}
      `,
      fontFamily: "'Press Start 2P', monospace",
      animationName: "fadeInOutSequential",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDuration: `${duration * totalLines}ms`,
    },

    "@keyframes fadeInOutSequential": {
      "0%": { opacity: 0 },
      "8.33%": { opacity: 0 }, // 100/12 ≈ 8.33%
      "16.66%": { opacity: 3 },
      "25%": { opacity: 0 },
      "100%": { opacity: 0 },
    },
  };
});

export const ScoreButton = styled("button")({
  position: "absolute",
  zIndex: 50,
  top: "2.5%", // tu peux modifier
  right: "5%", // ou centrer si tu veux
  background: "#727272b3",
  borderRadius: "25px",
  border: "none",
  cursor: "pointer",

  /* TAILLE DU TEXTE */
  fontFamily: "'Press Start 2P', monospace",
  fontSize: "26px", // <<< PLUS GROS
  letterSpacing: "2px", // espacé style arcade

  /* COULEUR NEON VISIBLE */
  color: "#0013a7", // rose néon visible
  textShadow: `
    0 0 4px #ff00ff,
    0 0 8px #ff00ff,
    0 0 12px #ff00ff,
    0 0 20px #ff00ff,
    0 0 40px #ff00aa,
    0 0 60px #ff0088
  `,

  padding: "12px 18px",

  /* ANIMATION GLOW */
  animation: "pulseNeon 2s ease-in-out infinite",

  /* Pas de cadre */
  outline: "none",

  "&:hover": {
    transform: "scale(1.08)",
  },

  "@keyframes pulseNeon": {
    "0%": { textShadow: "0 0 8px #ff00ff, 0 0 16px #ff00ff, 0 0 32px #ff0099" },
    "50%": {
      textShadow: "0 0 16px #ff00ff, 0 0 32px #ff00ff, 0 0 60px #ff00cc",
    },
    "100%": {
      textShadow: "0 0 8px #ff00ff, 0 0 16px #ff00ff, 0 0 32px #ff0099",
    },
  },
});