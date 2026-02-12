import React from "react";
import { AppRoutes } from "./app/AppRoutes";
import {
  GlobalStyles,
   ThemeProvider,
   createTheme,
  css,
   responsiveFontSizes,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}


export let theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    colorGris: {
      main: "#e2e1de",
    },
    colorGrisFoncé: {
      main: "#414648",
    },
    backgroundAccueil: {
      main: "#414648",
    },
    colorTextVert: {
      main: "#63df0f",
    },
    colorVertButton: {
      main: "#2C9F19",
    },
    colorVertMenu: {
      main: "#9AFDC6",
    },
    buttonNoir: {
      main: "#222222",
    },
    rouge: {
      main: "#ff0000",
    },
    vert: {
      main: "#929763",
    },
    vertTopBar: {
      main: "#9AFDC6",
    },
    gradient1: {
      main: "#7382004",
    },
  },
  
  typography: {
    h1: {
      fontFamily: "Aladin, serif",
      fontSize: "4rem",
      "@media (max-width:1600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontFamily: "Milonga, serif",
      fontSize: "4rem",
      "@media (max-width:1600px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontFamily: "Special Elite, cursive",
      "@media (max-width:750px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      fontFamily: "Times New Roman, serif",
      "@media (max-width:750px)": {
        fontSize: "0.7rem",
      },
    },
    h5: {
      fontFamily: "Architects Daughter, serif",
      fontSize: "1.6rem",
      "@media (max-width:1200px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontFamily: "Inter, serif",
    },
    body1: {
      fontFamily: "Digital-7, sans-serif",
      fontSize: "4rem",
      "@media (max-width:1600px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:1200px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:900px)": {
        fontSize: "0.6rem",
      },
      "@media (max-width:500px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:370px)": {
        fontSize: "0.4rem",
      },
    },
    body2: {
      fontFamily: "Times New Roman, serif",
    },
    subtitle1: {
      fontFamily: "Times New Roman, serif",
      fontSize: "10rem",
      "@media (max-width:750px)": {
        fontSize: "3rem",
      },
      "@media (max-width:350px)": {
        fontSize: "2rem",
      },
    },
  },
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
    values: { xxs: 0, xs: 300, sm: 568, md: 750, lg: 960, xl: 1200, xxl: 1500 },
  },
});
theme = responsiveFontSizes(theme);

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyles
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #root,
          body {
            * {
              font-family: "Digital-7", sans-serif;
            }
            margin: 0;
            overflow-x: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none; /* IE 10+ */
            scrollbar-width: none; /* Firefox */
            &::-webkit-scrollbar {
              /* chrome based */
              width: 0px;
            }
          }
        `}
      />
    </>
  );
};

export default App;
