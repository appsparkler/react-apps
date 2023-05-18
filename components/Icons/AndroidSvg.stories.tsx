import type { Meta, StoryObj } from "@storybook/react";
import { AndroidSvg } from "./AndroidSvg";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AndroidSvg> = {
  title: "Components/SVG Files/Android",
  component: AndroidSvg,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AndroidSvg>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AndroidSvgStory: Story = {
  args: {
    sx: {
      width: 300,
      height: 70,
    },
  },
};

AndroidSvgStory.storyName = "Android";
