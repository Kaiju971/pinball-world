// import { styled } from "@mui/material/styles";

// export const Wrapper = styled("div")({
//   width: "100vw",
//   height: "100vh",

//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",

//   background: "black",

//   ".toggle-container": {
//     position: "relative",
//     width: "150px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     perspective: "800px",
//     zIndex: 5,
//   },

//   ".toggle-wrap": {
//     position: "relative",
//     width: "100%",
//     height: "60px",
//     transformStyle: "preserve-3d",
//   },

//   ".toggle-input": {
//     position: "absolute",
//     opacity: 0,
//     width: 0,
//     height: 0,
//   },

//   ".toggle-track": {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background: "rgba(0, 30, 60, 0.4)",
//     borderRadius: "30px",
//     cursor: "pointer",
//     boxShadow:
//       "0 0 15px rgba(0, 80, 255, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.8)",
//     overflow: "hidden",
//     backdropFilter: "blur(5px)",
//     transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
//     border: "1px solid rgba(0, 150, 255, 0.3)",
//   },

//   ".toggle-thumb": {
//     position: "absolute",
//     width: "54px",
//     height: "54px",
//     left: "3px",
//     top: "3px",
//     borderRadius: "50%",
//     transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
//   },

//   ".toggle-label": {
//     color: "white",
//     fontSize: "20px",
//     paddingTop:"2rem",
//   },

//   ".data-text": {
//     position: "absolute",
//     fontSize: "12px",
//     fontWeight: 500,
//     letterSpacing: "1px",
//     textTransform: "uppercase",
//   },

//   ".data-text.off": {
//     right: "12px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     opacity: 1,
//     color: "rgba(0,150,255,0.6)",
//   },

//   ".data-text.on": {
//     left: "15px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     opacity: 0,
//     color: "rgba(0,255,150,0.6)",
//   },

//   ".toggle-input:checked + .toggle-track .toggle-thumb": {
//     left: "calc(100% - 57px)",
//   },

//   ".toggle-input:checked + .toggle-track .data-text.off": {
//     opacity: 0,
//   },

//   ".toggle-input:checked + .toggle-track .data-text.on": {
//     opacity: 1,
//   },
// });

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