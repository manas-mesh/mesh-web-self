/* eslint-disable import/no-anonymous-default-export */
import { Box } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { ProgressCheckInPopover, ProgressCheckInPopoverProps } from './ProgressCheckInPopover';

const ProgressCheckInPopper: Meta = {
  title: 'Goal Components/ProgressCheckInPopover',
  component: ProgressCheckInPopover,
};
export default ProgressCheckInPopper;

const ProgressCheckInPopoverTemplate: Story<ProgressCheckInPopoverProps> = (args) => {
  const [value, setValue] = useState(12);

  // const onChange = (e: number): void => {
  //   setValue(e);
  // };
  return (
    <Box margin={'0 auto'} width={'560px'}>
      <ProgressCheckInPopover {...args} />
    </Box>
  );
};

export const Basic = ProgressCheckInPopoverTemplate.bind({});
// Basic.args = {
//   min: 0,
//   max: 100,
//   showTextField: true,
//   isDisabled: false,
// };
