"use client";
import { ThemeProvider as MUI_ThemeProvider, createTheme } from "@mui/material";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

export const ThemeProvider: React.FC<Omit<ThemeProviderProps, "theme">> = ({
  children,
}) => (
  <MUI_ThemeProvider
    theme={createTheme({
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
    {children}
  </MUI_ThemeProvider>
);
