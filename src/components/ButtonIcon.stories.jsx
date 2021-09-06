import React from 'react';
import ButtonIcon from './ButtonIcon';

export default {
    component: ButtonIcon,
    title: 'Button Icon'
};

const Template = args => <ButtonIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   color: '#04a173',
   text: ''
};


export const Red = Template.bind({});
Red.args = {
   color: 'red',
   text: ''
};