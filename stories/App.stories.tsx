import { Meta, Story } from '@storybook/react';
import React from 'react';
import { App, AppProps } from '../src/app';

export default {
  title: 'App',
  component: App,
  argTypes: {
    name: { control: 'text' },
  },
} as Meta;
const Template: Story<AppProps> = (args) => <App {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  name: 'you',
};
