"use client";
import React from "react";
import { InfoItemFC } from "../../types";
import { Box } from "@/lib/mui/Box";
import { Typography } from "@/lib/mui/Typography";

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
        <Typography variant="h6" ml={1} className="selection-react">
          {info}
        </Typography>
      </Box>
    </>
  );
};
