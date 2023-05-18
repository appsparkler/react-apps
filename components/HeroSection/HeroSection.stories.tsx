import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof HeroSection> = {
  title: "Components/Hero Section",
  component: HeroSection,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof HeroSection>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HeroSectionStory: Story = {
  args: {},
};
HeroSectionStory.storyName = "Hero Section";
