import type { Preview } from "@storybook/react";
import { ThemeProviderDecorator } from "./decorators/ThemeProvider";

const preview: Preview = {
  decorators: [ThemeProviderDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
