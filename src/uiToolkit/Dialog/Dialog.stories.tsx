/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Dialog } from './';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/react';
import { Button } from '@uiToolkit/Button';

const DialogStory = {
  title: 'Core Components/Dialog',
  component: Dialog,
};

export default DialogStory;

export const Normal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={onClose}>
        <Box p={'20px'}>Hello world</Box>
      </Dialog>
    </>
  );
};

export const DialogWithCloseButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={onClose} showCloseButton={true}>
        <Box p={'20px'}>Hello world</Box>
      </Dialog>
    </>
  );
};

export const DialogFullSizeWithCloseButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={onClose} showCloseButton={true} isFullSize>
        <Box p={'20px'}>
          Full size Dialog. Does not look fullSize because of storybook encapsulated DOM. Open story in new tab view to
          check size and responsiveness
        </Box>
      </Dialog>
    </>
  );
};

export const MainContent5SideContent3 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isExtensionVisible, onToggle } = useDisclosure();
  const extensionChildren = <Box p={3}>hello this is part of extended section</Box>;
  return (
    <>
      <button onClick={onOpen}>Open Dialog</button>
      <Dialog
        isOpen={isOpen}
        onClose={onClose}
        showCloseButton={true}
        mainContentColWidth={5}
        extensionContentColWidth={3}
        extensionChildren={isExtensionVisible ? extensionChildren : null}
      >
        <Box p={'20px'}>
          Full size Dialog. Does not look fullSize because of storybook encapsulated DOM. Open story in new tab view to
          check size and responsiveness
        </Box>
        <Button onClick={onToggle}>Expand extension</Button>
      </Dialog>
    </>
  );
};
