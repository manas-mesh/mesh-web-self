import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ButtonSelect, ButtonSelectProps } from './ButtonSelect';
import { AppNavigationOutlined as StartIcon } from '@assets/iconComponents';
import { OptionItem } from '@uiToolkit/Options';

const ButtonSelectStory: Meta = {
  title: 'Core Components/ButtonSelect',
  component: ButtonSelect,
};
export default ButtonSelectStory;

const ButtonSelectTemplate: Story<ButtonSelectProps> = (args) => <ButtonSelect {...args} />;

const nestedOptions = [
  {
    label: 'parent1',
    StartIcon: StartIcon,
    isNested: true,
    values: [
      { value: 1, label: 'check1', StartIcon: StartIcon, isNested: false },
      { value: 2, label: 'check2', StartIcon: StartIcon, isNested: false },
      { value: 3, label: 'check3', StartIcon: StartIcon, isNested: false },
    ],
    value: 10,
  },
  {
    label: 'parent2',
    StartIcon: StartIcon,
    isNested: true,
    values: [
      { value: 4, label: 'check4', StartIcon: StartIcon, isNested: false },
      { value: 7, label: 'check7', StartIcon: StartIcon, isNested: false, isDisabled: true },
    ],
    value: 11,
  },
  {
    label: 'parent3',
    StartIcon: StartIcon,
    isNested: true,
    values: [
      { value: 8, label: 'check8', StartIcon: StartIcon, isNested: false },
      { value: 9, label: 'check9', StartIcon: StartIcon, isNested: false },
    ],
    value: 13,
  },
  { value: 5, label: 'check5', StartIcon: StartIcon, isNested: false },
  { value: 6, label: 'check4zzzz', isNested: false },
];

const options: OptionItem[] = [
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
  defaultValues: [2],
};

export const ButtonWithNestedOptions = ButtonSelectTemplate.bind({});

ButtonWithNestedOptions.args = {
  options: nestedOptions,
  onChange: (e) => {
    console.log(e);
  },
  ButtonStartIcon: StartIcon,
};

export const NestedOptionsWithMultipleSelect = ButtonSelectTemplate.bind({});

NestedOptionsWithMultipleSelect.args = {
  options: nestedOptions,
  onChange: (e) => {
    console.log(e);
  },
  ButtonStartIcon: StartIcon,
  allowMultipleSelect: true,
};
