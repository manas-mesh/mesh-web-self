import { Menu } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Optionitem, Options, OptionsType } from './Options';
import { AppNavigationOutlined as StartIcon } from '@assets/iconComponents';

const OptionsStory: Meta = {
  title: 'Core Components/Options',
  component: Options,
};
export default OptionsStory;

const OptionsTemplate: Story<OptionsType> = (args) => (
  <Menu isOpen>
    <Options {...args} />;
  </Menu>
);
const options: Optionitem[] = [
  { value: 1, label: 'check1', StartIcon: StartIcon },
  { value: 2, label: 'check2', StartIcon: StartIcon },
  { value: 3, label: 'check3', StartIcon: StartIcon },
  { value: 4, label: 'add element', StartIcon: StartIcon },
];

export const WithIcon = OptionsTemplate.bind({});

WithIcon.args = {
  options,
};

export const WithoutIcon = OptionsTemplate.bind({});
WithoutIcon.args = {
  options: options.map((item) => ({
    value: item.value,
    label: item.label,
  })),
};

export const DisabledWithIcon = OptionsTemplate.bind({});

DisabledWithIcon.args = {
  options: options.concat({ value: 5, label: 'disabled', StartIcon: StartIcon, isDisabled: true }),
};

export const WithDefaultValue = OptionsTemplate.bind({});

WithDefaultValue.args = {
  options,
  defaultValue: 3,
};
