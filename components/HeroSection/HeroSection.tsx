import { stringResources } from "@/values/strings";
import { Box, Typography } from "@mui/material";
import { getGraidentTextStyle } from "./getGraidentTextStyle";
import { AndroidSvg } from "../Icons/AndroidSvg";
import { ReactSvg } from "../Icons/ReactSvg";

export const HeroSection = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <ReactSvg aria-label="react logo" sx={{ height: 150, width: 150 }} />
      <AndroidSvg aria-label="android logo" sx={{ height: 75, width: 180 }} />
      <Typography variant="h1">{stringResources.name}</Typography>
      <Box
        sx={(theme) => ({
          ...getGraidentTextStyle(
            theme.palette.secondary.main,
            theme.palette.primary.main
          ),
        })}
      >
        <Typography variant="subtitle1" sx={{}}>
          {"React & Android Developer"}
        </Typography>
      </Box>
    </Box>
  );
};
