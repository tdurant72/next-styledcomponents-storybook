import React from 'react';

import Input from '../components/Input';
export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        type: { control: 'select' },
    },
};

const Template = (args) => <Input {...args} />;

export const TextType = Template.bind({});
TextType.args = {
    type: 'text',
    placeholder: 'User Name',
    label: 'User Name',
    labelColor: 'primary'
};
export const Checkbox = Template.bind({});
Checkbox.args = {
    type: 'checkbox',
    placeholder: '',
    label: 'I agree',
    labelColor: 'primary'
};
export const Radio = Template.bind({});
Radio.args = {
    type: 'radio',
    placeholder: '',
    label: 'I agree',
    labelColor: 'primary'
};

export const Email = Template.bind({});
Email.args = {
    type: 'email',
    placeholder: 'Email',
    label: 'User Email',
    labelColor: 'primary'
};
export const Password = Template.bind({});
Password.args = {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    labelColor: 'primary'
};
export const Tel = Template.bind({});
Tel.args = {
    type: 'tel',
    placeholder: '000-000-0000',
    label: 'Phone Number',
    labelColor: 'primary'
};
