import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseStarRating } from './BaseStarRating';

export default {
  title: 'Core Components/BaseStarRating',
  component: BaseStarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BaseStarRating>;

const Template: ComponentStory<typeof BaseStarRating> = (args) => <BaseStarRating {...args} />;

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  maxRating: 10,
  rating: 3,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  maxRating: 10,
  rating: 3,
  label: 'Label',
};

export const WithRequiredError = Template.bind({});
WithRequiredError.args = {
  label: 'Label',
  maxRating: 10,
  disabled: false,
  isRequired: true,
  enableValidation: true,
  rating: 3,
};
