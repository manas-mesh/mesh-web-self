import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './Rating';

export default {
  title: 'Example/Rating',
  component: Rating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  totalStars: 10,
  averageScore: 3,
};

// export const WithoutBackground = Template.bind({});
// WithoutBackground.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   withBackground: false,
// };

// export const WithoutLabel = Template.bind({});
// WithoutLabel.args = {
//   name: 'Name',
//   type: 'text',
//   placeholder: 'Enter Name',
// };

// export const WithHelperText = Template.bind({});
// WithHelperText.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   helperText: 'Helper Text',
// };

// export const WithEndIcon = Template.bind({});
// WithEndIcon.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   endIcon: 'date_range',
// };

// export const WithoutLabelAndWithEndIcon = Template.bind({});
// WithoutLabelAndWithEndIcon.args = {
//   name: 'Name',
//   type: 'text',
//   placeholder: 'Enter Name',
//   endIcon: 'date_range',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   value: 'Jane Doe',
//   disabled: true,
// };

// export const WithoutLabelAndDisabled = Template.bind({});
// WithoutLabelAndDisabled.args = {
//   name: 'Name',
//   type: 'text',
//   placeholder: 'Enter Name',
//   value: 'Jane Doe',
//   disabled: true,
// };

// export const WithError = Template.bind({});
// WithError.args = {
//   name: 'Name',
//   type: 'text',
//   label: 'Name',
//   placeholder: 'Enter Name',
//   error: 'This is an error',
// };
