/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { OwnerCollaboratorsPopup, OwnerCollaboratorsPopupProps } from './OwnerCollaboratorsPopup';
import SampleAv from '@assets/images/avatar.png';
import { Button } from '@uiToolkit/Button';

const SliderStory: Meta = {
  title: 'Goal Components/Owners-collaborators-popup',
  component: OwnerCollaboratorsPopup,
};
export default SliderStory;

const EmployeeEditPopupTemplate: Story<OwnerCollaboratorsPopupProps> = (args) => <OwnerCollaboratorsPopup {...args} />;

const owners = [
  { name: 'John Doe', imgSrc: SampleAv },
  { name: 'John Doe check again', imgSrc: SampleAv, role: 'frontend dev' },
];
const collaborators = [
  { name: 'Michael', imgSrc: SampleAv },
  { name: 'Michael check', imgSrc: SampleAv, role: 'frontend dev' },
];
const ButtonEl = <Button ml={'200px'}>click to open popover</Button>;

export const Basic = EmployeeEditPopupTemplate.bind({});
Basic.args = {
  referenceEl: ButtonEl,
  owners: owners,
  collaborators: collaborators,
};
