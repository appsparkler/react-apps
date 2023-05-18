import { stringResources } from "@/values/strings";
import { Box, Typography } from "@mui/material";
import { getGraidentTextStyle } from "./getGraidentTextStyle";

export const HeroSection = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
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
