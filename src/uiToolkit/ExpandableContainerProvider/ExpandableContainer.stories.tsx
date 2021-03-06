import { Box } from '@chakra-ui/react';
import { noOp } from '@constants/common';
import React from 'react';
import { AppLayoutDummyWrapper } from 'uiToolkit/AppLayoutDummyWrapper';
import { Button } from 'uiToolkit/Button';

import { useExpandableContainer } from '.';
import { ExpandableContainerI, ExpandableContainerProvider } from './ExpandableContainerProvider';

const ExpandableContainer = {
  title: 'Layout/ExpandableContainer',
  component: ExpandableContainerProvider,
};

export default ExpandableContainer;

const DemoInnerComp = () => {
  const { isExpanded = false, onExpandClick = noOp, onShrinkClick }: ExpandableContainerI = useExpandableContainer();
  const heading = "Hello , the container is '" + (isExpanded ? "Expanded'" : "Not Expanded'");
  return (
    <Box bg="burlywood" p={2}>
      <h1>{heading}</h1>
      <Button onClick={onExpandClick} sx={{ mr: 2 }}>
        Expand
      </Button>
      <Button onClick={onShrinkClick}>Shrink</Button>
    </Box>
  );
};

export const Primary = () => (
  <AppLayoutDummyWrapper>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <ExpandableContainerProvider id="someUniqueIdForMultipleUsage">
      <DemoInnerComp />
    </ExpandableContainerProvider>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
    <h1>----------------------------</h1>
  </AppLayoutDummyWrapper>
);
