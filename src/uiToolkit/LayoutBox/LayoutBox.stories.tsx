import React from 'react';
import { AppLayoutDummyWrapper } from '@uiToolkit/AppLayoutDummyWrapper';

import { LayoutBox } from './LayoutBox';

const LayoutBoxStory = {
  title: 'Layout/LayoutBox',
  component: LayoutBox,
};

export default LayoutBoxStory;

export const ColSpan4 = () => (
  <AppLayoutDummyWrapper>
    <LayoutBox colSpan={4} bg="red" h="100vh" />
  </AppLayoutDummyWrapper>
);
export const ColSpan15 = () => (
  <AppLayoutDummyWrapper>
    <LayoutBox colSpan={15} bg="red" h="100vh" />
  </AppLayoutDummyWrapper>
);
export const ColSpan1 = () => (
  <AppLayoutDummyWrapper>
    <LayoutBox colSpan={1} bg="red" h="100vh" />
  </AppLayoutDummyWrapper>
);
