import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

import { InteractionContainer } from '.';

const InteractionContainerStory = {
  title: 'Core Components/InteractionContainer',
  component: InteractionContainer,
};

const RatingTemplate = (args) => {
  const [isSelected, setIsSelected] = useState(false);

  function clickHandler() {
    setIsSelected(true);
  }

  return (
    <InteractionContainer onClick={clickHandler} isSelected={isSelected} {...args}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '200px',
          height: '100px',
        }}
      >
        Content
      </Box>
    </InteractionContainer>
  );
};

export const Primary = RatingTemplate.bind({});
Primary.argTypes = {};

export const ReadOnly = RatingTemplate.bind({});
ReadOnly.argTypes = { readOnly: true };

export const Error = RatingTemplate.bind({});
Error.argTypes = { isError: true };

export default InteractionContainerStory;
