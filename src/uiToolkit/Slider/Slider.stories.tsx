/* eslint-disable import/no-anonymous-default-export */
import { Meta } from '@storybook/react';
import React from 'react';
import {
  Slider as SliderWrapper,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  background,
} from '@chakra-ui/react';
import Slider from './';

const SliderStory: Meta = {
  title: 'Core Components/Slider',
  component: Slider,
};
export default SliderStory;

//const Template = args =><Button{...args} />
export const Defaultt = () => (
  <Slider
    onChangeEnd={(e: any) => {
      console.log(e, 'final value');
    }}
    value={1}
    max={20}
  />
);
