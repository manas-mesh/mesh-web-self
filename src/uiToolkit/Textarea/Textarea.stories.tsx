import { useState } from 'react';
import { Story } from '@storybook/react';

import Textarea from './Textarea';
import type { TextareaProps } from './Textarea';

import { AppNavigationOutlined } from '@iconComponents';

const TextareaStory = {
  title: 'Core Components/Textarea',
  component: Textarea,
};

const TextareaTemplate: Story<TextareaProps> = (args) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ width: '200px' }}>
      <Textarea withBackground={true} value={value} handleChange={handleChange} {...args} />
    </div>
  );
};

export const Basic = TextareaTemplate.bind({});
Basic.args = {
  name: 'Address',
  type: 'text',
  label: 'Address',
  placeholder: 'Enter Address Here',
};

export const WithoutBackground = TextareaTemplate.bind({});
WithoutBackground.args = {
  name: 'Address',
  type: 'text',
  label: 'Address',
  placeholder: 'Enter Address Here',
  withBackground: false,
};

export const WithoutLabel = TextareaTemplate.bind({});
WithoutLabel.args = {
  name: 'Address',
  type: 'text',
  placeholder: 'Enter Address Here',
};

export const WithHelperText = TextareaTemplate.bind({});
WithHelperText.args = {
  name: 'Address',
  type: 'text',
  label: 'Address',
  placeholder: 'Enter Address Here',
  helperText: 'Helper Text',
};

export const WithSpecifiedRows = TextareaTemplate.bind({});
WithSpecifiedRows.args = {
  name: 'Address',
  type: 'text',
  label: 'Address',
  placeholder: 'Enter Address Here',
  rows: 5,
};

export const Disabled = TextareaTemplate.bind({});
Disabled.args = {
  name: 'Address',
  type: 'text',
  label: 'Address',
  placeholder: 'Enter Address Here',
  value: 'Jane Doe',
  isDisabled: true,
};

export const WithoutLabelAndDisabled = TextareaTemplate.bind({});
WithoutLabelAndDisabled.args = {
  name: 'Address',
  type: 'text',
  placeholder: 'Enter Address Here',
  value: 'Jane Doe',
  isDisabled: true,
};

export const WithError = TextareaTemplate.bind({});
WithError.args = {
  name: 'Address',
  type: 'text',
  label: 'Address',
  placeholder: 'Enter Address Here',
  error: 'This is an error',
};

export default TextareaStory;
