/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Dialog } from './';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/react';

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
