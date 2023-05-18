import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/lato/900.css";
import "@fontsource/montserrat/100.css";
import { Decorator } from "@storybook/react";
import React from "react";

export const ThemeProviderDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          h1: {
            fontFamily: "montserrat",
            fontWeight: "100",
            fontSize: 52,
          },
          subtitle1: {
            fontFamily: "Lato",
            fontSize: 18,
            fontWeight: "100",
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
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};
