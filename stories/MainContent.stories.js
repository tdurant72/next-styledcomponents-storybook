import React from 'react';

import MainContent from '../components/MainContent'

export default {
    title: 'Components/MainContent',
    component: MainContent,
    argTypes: {
        pageColor: { control: 'select' },
        titleColor: { control: 'select' },
    },
};

const Template = (args) => <MainContent {...args} />;

export const PageColorLight = Template.bind({});
PageColorLight.args = {
    pageColor: 'light',
    title: 'MainContent',
    titleColor: 'primary'
};
export const PageColorDark = Template.bind({});
PageColorDark.args = {
    pageColor: 'dark',
    title: 'MainContent',
    titleColor: 'light'
};
export const PageColorPrimary = Template.bind({});
PageColorPrimary.args = {
    pageColor: 'primary',
    title: 'MainContent',
    titleColor: 'light'
};
export const PageColorSecondary = Template.bind({});
PageColorSecondary.args = {
    pageColor: 'secondary',
    title: 'MainContent',
    titleColor: 'light'
};
export const TitleColorLight = Template.bind({});
TitleColorLight.args = {
    pageColor: 'dark',
    title: 'MainContent',
    titleColor: 'light'
};
export const TitleColorDark = Template.bind({});
TitleColorDark.args = {
    pageColor: 'light',
    title: 'MainContent',
    titleColor: 'dark'
};
export const TitleColorPrimary = Template.bind({});
TitleColorPrimary.args = {
    pageColor: 'light',
    title: 'MainContent',
    titleColor: 'primary'
};
export const TitleColorSecondary = Template.bind({});
TitleColorSecondary.args = {
    pageColor: 'light',
    title: 'MainContent',
    titleColor: 'secondary'
};


