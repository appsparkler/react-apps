"use client";
import {
  GlobalStyles,
  ThemeProvider as MUI_ThemeProvider,
  createTheme,
} from "@mui/material";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import "@fontsource/montserrat/100.css";
import "@fontsource/lato/900.css";

export const ThemeProvider: React.FC<Omit<ThemeProviderProps, "theme">> = ({
  children,
}) => (
  <MUI_ThemeProvider
    theme={createTheme({
      typography: {
        h1: {
          fontFamily: "montserrat",
          fontWeight: "100",
          fontSize: 52,
        },
        subtitle2: {
          fontFamily: "Lato",
          fontSize: 18,
          fontWeight: "900",
        },
      },
      palette: {
        mode: "dark",
        primary: {
          main: "#3DDC84",
        },
        secondary: {
          main: "#61dbfb",
        },
      },
    })}
  >
    <GlobalStyles
      styles={{
        ".special-selection::selection": {
          color: "black",
          background: "#3DDC84",
        },
        ".selection-react::selection": {
          color: "black",
          background: "#61dbfb",
        },
        ".selection-none::selection": {
          background: "transparent",
        },
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
      }}
    />
    {children}
  </MUI_ThemeProvider>
);
