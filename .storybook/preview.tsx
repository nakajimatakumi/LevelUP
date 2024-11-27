import type { Preview } from "@storybook/react";
import React from "react";
import { kosugiMaru } from "../src/app/layout";

const preview: Preview = {
  parameters: {
    docs: {
      extractComponentDescription: () => null,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: kosugiMaru.style.fontFamily, color: "#555555" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
