import { StatusCompleted } from '@assets/iconComponents';
import { Story } from '@storybook/react';
import { PropTypes, ReviewNavListItem } from './ReviewNavListItem';

export default {
  title: 'Core Components/ReviewNavListItem',
  component: ReviewNavListItem,
};

const item = {
  title: 'Title Text',
  subTitle: 'Sub Title Text',
  actionIcon: StatusCompleted,
};

const Template: Story<PropTypes> = (args) => <ReviewNavListItem {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  item: item,
};
