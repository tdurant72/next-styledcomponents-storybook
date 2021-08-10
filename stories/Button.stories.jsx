import React from 'react';

import { Button } from '../components/Button';
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    type: { control: 'select' },
    size: { control: 'select' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  type: 'primary-outline',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  type: 'secondary-outline',
  label: 'Button',
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

//figma url: https://www.figma.com/file/9wH6FYWxTjmD3NHIKcaCWP/Figma-crash-course?node-id=24%3A138