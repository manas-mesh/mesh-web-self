import { useState } from 'react';
import { Story } from '@storybook/react';

import { Input } from './Input';
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
      <Input withBackground={true} {...args} value={value} handleChange={handleChange} />
    </div>
  );
};

export const Basic = InputTemplate.bind({});
Basic.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
};

export const WithoutBackground = InputTemplate.bind({});
WithoutBackground.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
  withBackground: false,
};

export const WithoutLabel = InputTemplate.bind({});
WithoutLabel.args = {
  name: 'Name',
  type: 'text',
  placeholder: 'Enter Name',
};

export const WithHelperText = InputTemplate.bind({});
WithHelperText.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
  helperText: 'Helper Text',
};

export const WithEndIcon = InputTemplate.bind({});
WithEndIcon.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
  endIcon: <AppNavigationOutlined />,
};

export const WithoutLabelAndWithEndIcon = InputTemplate.bind({});
WithoutLabelAndWithEndIcon.args = {
  name: 'Name',
  type: 'text',
  placeholder: 'Enter Name',
  endIcon: <AppNavigationOutlined />,
};

export const Disabled = InputTemplate.bind({});
Disabled.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
  value: 'Jane Doe',
  isDisabled: true,
};

export const WithoutLabelAndDisabled = InputTemplate.bind({});
WithoutLabelAndDisabled.args = {
  name: 'Name',
  type: 'text',
  placeholder: 'Enter Name',
  value: 'Jane Doe',
  isDisabled: true,
};

export const WithError = InputTemplate.bind({});
WithError.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
  error: 'This is an error',
};

export default InputStory;
