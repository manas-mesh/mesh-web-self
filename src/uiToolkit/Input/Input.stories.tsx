import { useState } from 'react';
import { Story } from '@storybook/react';

import Input from './Input';
import type { InputProps } from './Input';

import { AppNavigationOutlined } from '@iconComponents';

const InputStory = {
  title: 'Core Components/Input',
  component: Input,
};

const InputTemplate: Story<InputProps> = (args) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ width: '200px' }}>
      <Input {...args} value={value} onChange={handleChange} />
    </div>
  );
};

export const Basic = InputTemplate.bind({});
Basic.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
  withBackground: true,
};

export const WithoutBackground = InputTemplate.bind({});
WithoutBackground.args = {
  ...Basic.args,
  withBackground: false,
};

export const WithoutLabel = InputTemplate.bind({});
WithoutLabel.args = {
  ...Basic.args,
  label: undefined,
};

export const WithHelperText = InputTemplate.bind({});
WithHelperText.args = {
  ...Basic.args,
  helperText: 'Helper Text',
};

export const WithEndIcon = InputTemplate.bind({});
WithEndIcon.args = {
  ...Basic.args,

  endIcon: <AppNavigationOutlined />,
};

export const WithoutLabelAndWithEndIcon = InputTemplate.bind({});
WithoutLabelAndWithEndIcon.args = {
  ...Basic.args,
  label: undefined,
  endIcon: <AppNavigationOutlined />,
};

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  ...Basic.args,
  value: 'Jane Doe',
  isDisabled: true,
};

export const WithoutLabelAndDisabled = InputTemplate.bind({});
WithoutLabelAndDisabled.args = {
  ...Basic.args,
  label: undefined,
  value: 'Jane Doe',
  isDisabled: true,
};

export const WithHelperTextIconAndDisabled = InputTemplate.bind({});
WithHelperTextIconAndDisabled.args = {
  ...Basic.args,
  value: 'Jane Doe',
  helperText: 'Helper Text',
  endIcon: <AppNavigationOutlined />,
  isDisabled: true,
};

export const WithError = InputTemplate.bind({});
WithError.args = {
  ...Basic.args,
  error: 'This is an error',
};

export default InputStory;
