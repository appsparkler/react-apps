import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactRenderer, Decorator } from "@storybook/react";
import React from "react";

export const ThemeProviderDecorator: Decorator = (Story) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: "light",
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
