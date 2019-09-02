import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module)
  .add("to Storybook", () => <Welcome showApp={() => {}} />)
  .add("Button", () => (
    <Button onClick={() => action()("clicked")}>Hello Button</Button>
  ));
