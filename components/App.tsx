import { Box } from "@/lib/mui/Box";
import { InfoSection } from "./InfoItem/InfoSection";
import { HeroSection } from "./HeroSection/HeroSection";

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
