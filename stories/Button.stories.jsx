import React from 'react';
import { colors } from "../styles/ColorStyles";
import Button from '../components/Button';
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: 'select' },
    bg: { control: { type: 'color' } },
    bgh: { control: { type: 'color' } },
    txt: { control: { type: 'color' } },
    bd: { control: { type: 'color' } }
  },

};

const Template = (args) => <Button {...args}
//  colors object found in /styles.ColorStyles
/>;

export const Primary = Template.bind({});
Primary.args = {
  bg: colors.primary["500"],
  bgh: colors.primary["700"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  label: 'Button',
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  bg: colors.neutral["50"],
  bgh: colors.primary["50"],
  txt: colors.primary["500"],
  bd: colors.primary["500"],
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  bg: colors.secondary["500"],
  bgh: colors.secondary["700"],
  txt: colors.neutral["50"],
  bd: colors.secondary["500"],
  label: 'Button',
};
export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  bg: colors.neutral["50"],
  bgh: colors.secondary["50"],
  txt: colors.secondary["500"],
  bd: colors.secondary["500"],
  label: 'Button',
};
export const Small = Template.bind({});
Small.args = {
  bg: colors.primary["500"],
  bgh: colors.primary["700"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  size: 'small',
  label: 'Button',
};
export const Medium = Template.bind({});
Medium.args = {
  bg: colors.primary["500"],
  bgh: colors.primary["700"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  size: 'medium',
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  bg: colors.primary["500"],
  bgh: colors.primary["700"],
  txt: colors.neutral["50"],
  bd: colors.primary["500"],
  size: 'large',
  label: 'Button',
};

//figma url: https://www.figma.com/file/9wH6FYWxTjmD3NHIKcaCWP/Figma-crash-course?node-id=24%3A138