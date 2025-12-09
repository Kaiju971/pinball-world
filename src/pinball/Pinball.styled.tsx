// src/pinball/Pinball.styled.tsx
import { styled } from "@mui/material/styles";

export const Page = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  background: "#000",
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

export const SpeakerButton = styled("button")({
  width: 44,
  height: 44,
  borderRadius: 8,
  border: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  cursor: "pointer",
});

// import { styled } from "@mui/material/styles";

// interface ButtonProps {
//   color?: string;
// }

// export const Page = styled("div")({
//   position: "relative",
//   width: "100vw",
//   height: "100vh",
//   overflow: "hidden",
//   background: "#000",
// });

// export const CanvasWrapper = styled("div")({
//   width: "100%",
//   height: "100%",
// });

// export const HUD = styled("div")({
//   position: "absolute",
//   zIndex: 20,
//   top: 10,
//   left: 10,
//   color: "#fff",
//   fontFamily: "monospace",
// });

// export const Controls = styled("div")({
//   position: "absolute",
//   zIndex: 40,
//   right: 12,
//   top: 12,
//   display: "flex",
//   gap: 8,
// });

// export const SpeakerButton = styled("button")<ButtonProps>(({ color }) => ({
//   width: 44,
//   height: 44,
//   borderRadius: 8,
//   border: "none",
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   background: color || "rgba(0,0,0,0.5)",
//   color: "#fff",
//   cursor: "pointer",
//   transition: "opacity 0.2s",
//   "&:hover": {
//     opacity: 0.8,
//   },
// }));

// export const TableSelector = styled("div")({
//   position: "absolute",
//   zIndex: 30,
//   bottom: 20,
//   left: "50%",
//   transform: "translateX(-50%)",
//   display: "flex",
//   gap: 8,
//   background: "rgba(0, 0, 0, 0.7)",
//   padding: "8px 12px",
//   borderRadius: 8,
// });

// export const TableButton = styled("button")<{ color: string }>(({ color }) => ({
//   padding: "6px 12px",
//   border: "none",
//   borderRadius: 4,
//   background: color,
//   color: "#fff",
//   fontFamily: "monospace",
//   fontSize: 12,
//   cursor: "pointer",
//   transition: "transform 0.1s",
//   "&:hover": {
//     transform: "scale(1.05)",
//   },
// }));

// export const TableTitle = styled("div")({
//   fontSize: 18,
//   fontWeight: "bold",
//   marginBottom: 4,
// });

// export const LaunchButton = styled("button")({
//   position: "absolute",
//   zIndex: 40,
//   bottom: 20,
//   right: 20,
//   width: 60,
//   height: 60,
//   borderRadius: "50%",
//   border: "none",
//   background: "#ff0000",
//   color: "#fff",
//   fontSize: 12,
//   cursor: "pointer",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   "&:hover": {
//     background: "#ff3333",
//   },
// });
