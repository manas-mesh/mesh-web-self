import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ButtonSelect, ButtonSelectProps } from './ButtonSelect';
import { AppNavigationOutlined as StartIcon } from '@assets/iconComponents';
import { Optionitem } from '@uiToolkit/Options';

const ButtonSelectStory: Meta = {
  title: 'Core Components/ButtonSelect',
  component: ButtonSelect,
};
export default ButtonSelectStory;

const ButtonSelectTemplate: Story<ButtonSelectProps> = (args) => <ButtonSelect {...args} />;

const options: Optionitem[] = [
  { value: 1, label: 'check1', StartIcon: StartIcon },
  { value: 2, label: 'check2', StartIcon: StartIcon },
  { value: 3, label: 'check3', StartIcon: StartIcon },
  { value: 4, label: 'add element', StartIcon: StartIcon },
];

export const WithStartIcon = ButtonSelectTemplate.bind({});

WithStartIcon.args = {
  options,
  onChange: (e: any) => console.log(e),
  ButtonStartIcon: StartIcon,
};

export const WithoutIcon = ButtonSelectTemplate.bind({});
WithoutIcon.args = {
  options,
  onChange: (e: any) => console.log(e),
};

export const DisabledWithIcon = ButtonSelectTemplate.bind({});

DisabledWithIcon.args = {
  options,
  onChange: (e: any) => console.log(e),
  ButtonStartIcon: StartIcon,
  isDisabled: true,
};

export const WithDefaultValue = ButtonSelectTemplate.bind({});

WithDefaultValue.args = {
  options,
  onChange: (e: any) => console.log(e),
  ButtonStartIcon: StartIcon,
  defaultLabel: options[1].label,
  defaultValue: options[1].value,
};
