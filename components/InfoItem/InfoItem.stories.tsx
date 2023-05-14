import type { Meta, StoryObj } from "@storybook/react";
import { InfoItem, InfoSection } from "./InfoItem";
import { stringResources } from "../../values/strings";
import { PhoneSvgIcon } from "../Icons/PhoneSvg";
import { EmailSvgIcon } from "../Icons/EmailSvg";
import { ShareSvgIcon } from "../Icons/ShareSvg";
import { Box } from "@mui/material";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InfoItem> = {
  title: "Components/Info Item",
  component: InfoItem,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InfoItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Mobile: Story = {
  args: {
    Icon: PhoneSvgIcon,
    info: stringResources.mobile,
  },
};

export const Email: Story = {
  args: {
    Icon: EmailSvgIcon,
    info: stringResources.email,
  },
};

export const Social: Story = {
  args: {
    Icon: ShareSvgIcon,
    info: stringResources.social,
  },
};

export const infoSection = () => <InfoSection />;
