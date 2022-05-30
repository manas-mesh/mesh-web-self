import { Menu } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import { OptionItem, Options, OptionsTypeProps } from './Options';
import { AppNavigationOutlined as StartIcon } from '@assets/iconComponents';
import { BoxProps } from '@chakra-ui/react';

const OptionsStory: Meta = {
  title: 'Core Components/Options',
  component: Options,
};
export default OptionsStory;

const OptionsTemplate: Story<BoxProps & OptionsTypeProps> = (args) => (
  <Menu isOpen>
    <Options {...args} />;
  </Menu>
);
const options: OptionItem[] = [
  { value: 1, label: 'check1', StartIcon: StartIcon },
  { value: 2, label: 'check2', StartIcon: StartIcon },
  { value: 3, label: 'check3', StartIcon: StartIcon },
  { value: 4, label: 'add element', StartIcon: StartIcon },
];
const nestedOptions = [
  {
    label: 'parent1',
    StartIcon: StartIcon,
    isNested: true,
    value: [
      { value: 1, label: 'check1', StartIcon: StartIcon, isNested: false },
      { value: 2, label: 'check2', StartIcon: StartIcon, isNested: false },
      { value: 3, label: 'check3', StartIcon: StartIcon, isNested: false },
    ],
  },
  {
    label: 'parent2',
    StartIcon: StartIcon,
    isNested: true,
    value: [
      { value: 4, label: 'check4', StartIcon: StartIcon, isNested: false },
      { value: 7, label: 'check7', StartIcon: StartIcon, isNested: false, isDisabled: true },
    ],
  },
  {
    label: 'parent3',
    StartIcon: StartIcon,
    isNested: true,
    value: [
      { value: 8, label: 'check8', StartIcon: StartIcon, isNested: false },
      { value: 9, label: 'check9', StartIcon: StartIcon, isNested: false },
    ],
  },
  { value: 5, label: 'check5', StartIcon: StartIcon, isNested: false },
  { value: 6, label: 'check4zzzz', isNested: false },
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
  defaultItems: [options[2]],
};

export const NestedOptions = OptionsTemplate.bind({});

NestedOptions.args = {
  options: nestedOptions,
  onChange: (e) => {
    console.log(e);
  },
};

export const NestedOptionsWithMultipleSelect = OptionsTemplate.bind({});

NestedOptionsWithMultipleSelect.args = {
  options: nestedOptions,
  onChange: (e) => {
    console.log(e);
  },
  allowMultipleSelect: true,
};
