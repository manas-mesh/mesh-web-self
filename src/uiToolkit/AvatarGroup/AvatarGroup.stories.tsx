/* eslint-disable import/no-anonymous-default-export */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';
import Avatar from '@assets/images/avatar.png';

const AvatarGroupStory: Meta = {
  title: 'Core Components/AvatarGroup',
  component: AvatarGroup,
};
export default AvatarGroupStory;

const AvatarGroupTemplate: Story<AvatarGroupProps> = (args) => <AvatarGroup {...args} />;
const avatarOptions = [
  { size: 'medium', src: Avatar, showStarIcon: true },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar, showStarIcon: true },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
  { size: 'medium', src: Avatar },
];
export const Basic = AvatarGroupTemplate.bind({});
Basic.args = {
  avatars: avatarOptions,
  max: 14,
};

export const WithMaxAvatarsToDisplay = AvatarGroupTemplate.bind({});
WithMaxAvatarsToDisplay.args = {
  avatars: avatarOptions,
  max: 5,
};
