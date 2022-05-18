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
import Slider from '.';
import { baseTheme } from '../../themes/clients/baseTheme';
import { ThemeType } from '@themes/clients/baseTheme';
import { useTheme } from '@emotion/react';

const SliderStory: Meta = {
  title: 'Core Components/Slider',
  component: Slider,
};
export default SliderStory;

//const Template = args =><Button{...args} />
export const Defaultt = () => {
  const theme: ThemeType = useTheme();
  return (
    <Slider
      onChangeEnd={(e: any) => {
        console.log(e, 'final value');
      }}
      value={2}
      max={20}
    />
  );
};
