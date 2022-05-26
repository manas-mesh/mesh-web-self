import { useState } from 'react';
import { Story } from '@storybook/react';

import { Select } from './Select';
import type { SelectProps } from './Select';

const people = [
  {
    value: 'john-doe',
    label: 'John Doe',
  },
  {
    value: 'jane-doe',
    label: 'Jane Doe',
  },
  {
    value: 'richard-roe',
    label: 'Richard Roe',
  },
  {
    value: 'jane-smith',
    label: 'Jane Smith',
    disabled: true,
  },
];

const SelectStory = {
  title: 'Core Components/Select',
  component: Select,
};

const SelectTemplate: Story<SelectProps> = (args) => {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ width: '200px' }}>
      <Select withBackground={true} {...args} value={value} options={people} handleChange={handleChange} />
    </div>
  );
};

export const Basic = SelectTemplate.bind({});
Basic.args = {
  name: 'Name',
  type: 'text',
  label: 'Name',
  placeholder: 'Enter Name',
};

// export const WithoutBackground = SelectTemplate.bind({});
// WithoutBackground.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   withBackground: false,
// };

// export const WithoutLabel = SelectTemplate.bind({});
// WithoutLabel.args = {
//   name: 'Name',
//   type: 'text',
//   placeholder: 'Enter Name',
// };

// export const WithHelperText = SelectTemplate.bind({});
// WithHelperText.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   helperText: 'Helper Text',
// };

// export const Disabled = SelectTemplate.bind({});
// Disabled.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   value: 'Jane Doe',
//   isDisabled: true,
// };

// export const WithoutLabelAndDisabled = SelectTemplate.bind({});
// WithoutLabelAndDisabled.args = {
//   name: 'Name',
//   type: 'text',
//   placeholder: 'Enter Name',
//   value: 'Jane Doe',
//   isDisabled: true,
// };

// export const WithError = SelectTemplate.bind({});
// WithError.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   error: 'This is an error',
// };

export default SelectStory;
