/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Slider, SliderProps } from './Slider';

const SliderStory: Meta = {
  title: 'Core Components/Slider',
  component: Slider,
};
export default SliderStory;

const SliderTemplate: Story<SliderProps> = (args) => <Slider {...args} />;

export const Basic = SliderTemplate.bind({});
Basic.args = {
  min: 0,
  max: 100,
  value: 10,
  showTextField: true,
  isDisabled: false,
};

export const Disabled = SliderTemplate.bind({});
Disabled.args = { ...Basic.args };
Disabled.args.isDisabled = true;

export const WithTextField = SliderTemplate.bind({});
WithTextField.args = { ...Basic.args };
WithTextField.args.showTextField = true;

export const WithoutTextField = SliderTemplate.bind({});
WithoutTextField.args = { ...Basic.args };
WithoutTextField.args.showTextField = false;
