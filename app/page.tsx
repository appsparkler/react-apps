import { Box } from "@/lib/mui/Box";
import { Typography } from "@/lib/mui/Typography";
import { stringResources } from "@/values/strings";

export default function Home() {
  return (
    <Box>
      <Typography variant="body1">{stringResources.name}</Typography>
    </Box>
  );
}
