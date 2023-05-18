import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof App> = {
  title: "App",
  component: App,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof App>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AppStory: Story = {
  args: {},
};
