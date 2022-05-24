import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating } from './Rating';

export default {
  title: 'Core Components/Rating',
  component: Rating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  maxRating: 10,
  rating: 3,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  maxRating: 10,
  rating: 2,
  label: 'Label',
};
