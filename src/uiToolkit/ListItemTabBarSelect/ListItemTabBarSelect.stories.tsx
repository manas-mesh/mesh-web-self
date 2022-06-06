/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ListItemTabBarSelect, ListItemTabBarSelectProps } from './ListItemTabBarSelect';

const ListItemTabBarSelectStory: Meta = {
  title: 'Core Components/ListItemTabBarSelect',
  component: ListItemTabBarSelect,
};
export default ListItemTabBarSelectStory;

const ListItemTabBarSelectTemplate: Story<ListItemTabBarSelectProps> = (args) => <ListItemTabBarSelect {...args} />;

const items = [
  { title: 'check', subTitle: 'ok', value: 1 },
  { title: 'check', subTitle: 'ok', value: 2 },
  { title: 'check', subTitle: 'ok', value: 3 },
];

export const Basic = ListItemTabBarSelectTemplate.bind({});
Basic.args = {
  items: items,
  onChange: (e) => console.log(e),
  value: 1,
};
