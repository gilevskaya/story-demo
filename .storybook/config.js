import { configure, addParameters } from "@storybook/react";
import theme from "./theme";
import requireContext from "require-context.macro";

const viewports = {
  "0": {
    name: "320 (small mobile portrait)",
    styles: {
      width: "320px",
      height: "480px"
    }
  },
  "480": {
    name: "480 (mobile portrait)",
    styles: {
      width: "480px",
      height: "800px"
    }
  },
  "768": {
    name: "768 (mobile landscape)",
    styles: {
      width: "800px",
      height: "480px"
    }
  },
  // These breakpoints leave some room for scrollbars
  "996": {
    name: "996 (small laptop)",
    styles: {
      width: "996px",
      height: "768px"
    }
  },
  "1200": {
    name: "1200 (medium laptop)",
    styles: {
      width: "1200px",
      height: "800px"
    }
  }
};

addParameters({
  options: {
    showPanel: false,
    theme
  },
  viewport: { viewports }
});

function loadStories() {
  const req = requireContext("../src/stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
