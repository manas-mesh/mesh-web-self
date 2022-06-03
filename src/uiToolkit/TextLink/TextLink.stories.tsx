import { TabBarValueType } from '@uiToolkit/TabBarSelect/TabBarSelect';
import React from 'react';

import { TextLink } from './TextLink';

const TextLinkStory = {
  title: 'Core Components/TextLink',
  component: TextLink,
};

const options = [
  { value: 'one', label: 'one' },
  { value: 'two', label: 'two' },
  { value: 'three', label: 'three' },
];

export default TextLinkStory;

export const Primary = () => (
  <TextLink href="https://mesh.ai" textDecoration="none">
    This is an external link
  </TextLink>
);
