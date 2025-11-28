import React from "react";
import { AppRoutes } from "./app/AppRoutes";
import {
  GlobalStyles,
  // ThemeProvider,
  // createTheme,
  css,
  // responsiveFontSizes,
} from "@mui/material";

const App: React.FC = () => {
  return <><AppRoutes /><GlobalStyles
    styles={css`
          html {
            scroll-behavior: smooth;
          }
          #root,
          body {
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
        `} /></>;
};

export default App;
