import { SxProps, Theme } from "@mui/material";

export function getGraidentTextStyle(
  color1: string,
  color2: string,
  direction: "to right" | "to left" = "to right"
): SxProps<Theme> {
  return {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}
