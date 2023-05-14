import { Box, Typography } from "@mui/material";
import React from "react";
import { InfoItemFC } from "../../types";
import { PhoneSvgIcon } from "../Icons/PhoneSvg";
import { EmailSvgIcon } from "../Icons/EmailSvg";
import { ShareSvgIcon } from "../Icons/ShareSvg";
import { stringResources } from "../../values/strings";

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

export const InfoSection = () => (
  <Box display={"flex"} flexDirection={"column"}>
    <InfoItem Icon={PhoneSvgIcon} info={stringResources.mobile} />
    <InfoItem Icon={EmailSvgIcon} info={stringResources.email} />
    <InfoItem Icon={ShareSvgIcon} info={stringResources.social} />
  </Box>
);
