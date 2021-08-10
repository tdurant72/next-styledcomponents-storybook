import React from 'react';

import Section from '../components/Section'

export default {
    title: 'Components/Section',
    component: Section,
    argTypes: {
        sectionColor: { control: 'select' },
        titleColor: { control: 'select' },
    },
};

const Template = (args) => <Section {...args} />;

export const SectionColorLight = Template.bind({});
SectionColorLight.args = {
    sectionColor: 'light',
    title: 'Section',
    titleColor: 'primary'
};
export const SectionColorDark = Template.bind({});
SectionColorDark.args = {
    sectionColor: 'dark',
    title: 'Section',
    titleColor: 'light'
};
export const SectionColorPrimary = Template.bind({});
SectionColorPrimary.args = {
    sectionColor: 'primary',
    title: 'Section',
    titleColor: 'light'
};
export const SectionColorSecondary = Template.bind({});
SectionColorSecondary.args = {
    sectionColor: 'secondary',
    title: 'Section',
    titleColor: 'light'
};
export const TitleColorLight = Template.bind({});
TitleColorLight.args = {
    sectionColor: 'dark',
    title: 'Section',
    titleColor: 'light'
};
export const TitleColorDark = Template.bind({});
TitleColorDark.args = {
    sectionColor: 'light',
    title: 'Section',
    titleColor: 'dark'
};
export const TitleColorPrimary = Template.bind({});
TitleColorPrimary.args = {
    sectionColor: 'light',
    title: 'Section',
    titleColor: 'primary'
};
export const TitleColorSecondary = Template.bind({});
TitleColorSecondary.args = {
    sectionColor: 'light',
    title: 'Section',
    titleColor: 'secondary'
};


