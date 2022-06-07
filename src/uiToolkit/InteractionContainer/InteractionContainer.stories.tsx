import { Box } from '@chakra-ui/react';
import { ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { InteractionContainer } from '.';

const InteractionContainerStory = {
  title: 'Core Components/InteractionContainer',
  component: InteractionContainer,
};

const Template: ComponentStory<typeof InteractionContainer> = (args) => {
  const [isSelected, setIsSelected] = useState(false);

  function toggleSelected() {
    setIsSelected((x) => !x);
  }

  return (
    <InteractionContainer clickHandler={toggleSelected} isSelected={isSelected} {...args}>
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

export const Primary = Template.bind({});
Primary.args = {};

export const ReadOnly = Template.bind({});
ReadOnly.args = { readOnly: true };

export const Error = Template.bind({});
Error.args = { isError: true };

export default InteractionContainerStory;
