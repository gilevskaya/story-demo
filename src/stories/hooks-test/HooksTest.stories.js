import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

storiesOf("Hooks Test", module).add("Button", () =>
  React.createElement(() => {
    const [state, setState] = React.useState(5);
    return (
      <button
        onClick={() => {
          action()(`clicked: ${state + 1}`);
          setState(state + 1);
        }}
      >
        {state}
      </button>
    );
  })
);
