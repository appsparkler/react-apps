import type { Meta, StoryObj } from "@storybook/react";
import { InfoItem } from "./InfoItem";
import { PhoneAndroid as PhoneAndroidIcon } from "@mui/icons-material";
import { stringResources } from "../../values/strings";
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
export const BasicExample: Story = {
  args: {
    Icon: PhoneAndroidIcon,
    info: stringResources.mobile,
    borderColor: "primary.main",
  },
};
