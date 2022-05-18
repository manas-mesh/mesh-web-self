/* eslint-disable import/no-anonymous-default-export */
import { Meta } from '@storybook/react';
import React from 'react';
import { Buttons } from '.';

const ButtonStory: Meta = {
  title: 'Core Components/Button',
  component: Buttons,
};
export default ButtonStory;

//const Template = args =><Button{...args} />
export const Default = () => <Buttons variant="primary">hello world</Buttons>;
