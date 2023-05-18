"use client";
import { stringResources } from "@/values/strings";
import { getGraidentTextStyle } from "./getGraidentTextStyle";
import { AndroidSvg } from "../Icons/AndroidSvg";
import { ReactSvg } from "../Icons/ReactSvg";
import { Box } from "@/lib/mui/Box";
import { Typography } from "@/lib/mui/Typography";
import { BoxProps } from "@mui/material";

export const HeroSection: React.FC<{ wrapperBoxProps?: BoxProps }> = ({
  wrapperBoxProps,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      {...wrapperBoxProps}
    >
      <ReactSvg aria-label="react logo" sx={{ height: 150, width: 150 }} />
      <AndroidSvg aria-label="android logo" sx={{ height: 75, width: 180 }} />
      <Typography variant="h1" className="special-selection">
        {stringResources.name}
      </Typography>
      <Box
        sx={(theme) => ({
          ...getGraidentTextStyle(
            theme.palette.secondary.main,
            theme.palette.primary.main
          ),
        })}
      >
        <Typography
          variant="subtitle2"
          component="p"
          className="selection-none"
        >
          {"React & Android Developer"}
        </Typography>
      </Box>
    </Box>
  );
};
