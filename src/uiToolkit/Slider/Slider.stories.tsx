/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import Slider, { SliderProps } from '.';
import { baseTheme } from '../../themes/clients/baseTheme';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';

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
  isDisabled: false,
};

export const Disabled = SliderTemplate.bind({});

Disabled.args = { ...Basic.args };
Disabled.args.isDisabled = true;
