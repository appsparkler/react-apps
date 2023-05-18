import type { Meta, StoryObj } from "@storybook/react";
import { InfoSection } from "./InfoSection";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof InfoSection> = {
  title: "Components/Info Section",
  component: InfoSection,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof InfoSection>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InfoSectionStory: Story = {
  args: {},
};
InfoSectionStory.storyName = "Info Section";
