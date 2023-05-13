import { PhoneAndroid } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";

interface InfoItemProps {
  Icon: typeof PhoneAndroid;
  info: string | undefined;
  borderColor: BoxProps["borderColor"];
}

type InfoItemFC = React.FC<InfoItemProps>;

export const InfoItem: InfoItemFC = ({ Icon, info, borderColor }) => {
  return (
    <Box
      py={2}
      pl="20%"
      display="flex"
      flexDirection={"row"}
      alignItems={"center"}
      borderTop={"2px solid"}
      borderColor={borderColor}
    >
      <Icon sx={{ height: 30, width: 30 }} color="primary" />
      <Typography variant="h6" ml={1}>
        {info}
      </Typography>
    </Box>
  );
};
