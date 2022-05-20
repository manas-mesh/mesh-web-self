import React from 'react';

import { TabBarSelect, ValueType } from './TabBarSelect';

const TabBarSelectStory = {
  title: 'Core Components/TabBarSelect',
  component: TabBarSelect,
};

const options = [
  { value: 'one', label: 'one' },
  { value: 'two', label: 'two' },
  { value: 'three', label: 'three' },
];

const onChangeHandler = (newSelectedValue: ValueType) => console.log(`new selected value is: ${newSelectedValue}`);

export default TabBarSelectStory;

export const WithBackground = () => (
  <TabBarSelect options={options} value="two" onChange={onChangeHandler} withBackground={true} />
);

export const FullWidth = () => (
  <TabBarSelect options={options} value="two" onChange={onChangeHandler} withBackground={true} fullWidth />
);

export const WithoutBackground = () => <TabBarSelect options={options} value="two" onChange={onChangeHandler} />;
