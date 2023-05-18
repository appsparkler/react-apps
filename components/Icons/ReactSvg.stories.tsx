import type { Meta, StoryObj } from "@storybook/react";
import { ReactSvg } from "./ReactSvg";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ReactSvg> = {
  title: "Components/SVG Files/React",
  component: ReactSvg,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof ReactSvg>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ReactSvgStory: Story = {
  args: {},
};
