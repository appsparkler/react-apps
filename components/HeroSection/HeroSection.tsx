import { stringResources } from "@/values/strings";
import { Box, Typography } from "@mui/material";

export const HeroSection = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h1">{stringResources.name}</Typography>
      <Box
        sx={{
          background: ({ palette: { primary, secondary } }) =>
            `linear-gradient(to right, ${secondary.main}, ${primary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <Typography variant="subtitle1" sx={{}}>
          {"React & Android Developer"}
        </Typography>
      </Box>
    </Box>
  );
};
