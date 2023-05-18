import { Box } from "@mui/material";
import { InfoItem } from "./InfoItem";
import { PhoneSvgIcon } from "../Icons/PhoneSvg";
import { stringResources } from "@/values/strings";
import { ShareSvgIcon } from "../Icons/ShareSvg";
import { EmailSvgIcon } from "../Icons/EmailSvg";

export const InfoSection = () => (
  <Box display={"flex"} flexDirection={"column"}>
    <InfoItem Icon={PhoneSvgIcon} info={stringResources.mobile} />
    <InfoItem Icon={EmailSvgIcon} info={stringResources.email} />
    <InfoItem Icon={ShareSvgIcon} info={stringResources.social} />
  </Box>
);
