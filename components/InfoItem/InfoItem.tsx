import { PhoneAndroid } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";
import { PhoneSvgIcon } from "../Icons/PhoneSvg";

interface InfoItemProps {
  Icon: typeof PhoneSvgIcon;
  info: string | undefined;
}

type InfoItemFC = React.FC<InfoItemProps>;

export const InfoItem: InfoItemFC = ({ Icon, info }) => {
  return (
    <>
      <Box
        minHeight="2px"
        sx={{
          background: (theme) =>
            `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
        }}
      />
      <Box
        py={2}
        pl="20%"
        display="flex"
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Icon sx={{ height: 28, width: 28 }} />
        <Typography variant="h6" ml={1}>
          {info}
        </Typography>
      </Box>
    </>
  );
};
