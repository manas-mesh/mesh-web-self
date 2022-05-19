import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './Rating';
import { EmptyStar } from '../../assets/iconComponents/EmptyStar';
import { FilledStar } from '../../assets/iconComponents/FilledStar';

export default {
  title: 'Rating/Rating',
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
  rating: 3,
  label: 'Label',
  emptyIcon: <EmptyStar />,
  filledIcon: <FilledStar />,
};
