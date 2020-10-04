import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";

import { App, AppProps } from "../src/app";

export default {
  title: "App",
  component: App,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<AppProps> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "you",
};
