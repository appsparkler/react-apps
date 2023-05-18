import { Box } from "@mui/material";
import { HeroSection } from "./HeroSection/HeroSection";
import { InfoSection } from "./InfoItem/InfoSection";

export const App = () => (
  <Box
    display="flex"
    flexDirection={"column"}
    justifyContent={"space-between"}
    sx={{ height: "100%" }}
  >
    <HeroSection
      wrapperBoxProps={{
        flexGrow: 2,
      }}
    />
    <InfoSection />
  </Box>
);
