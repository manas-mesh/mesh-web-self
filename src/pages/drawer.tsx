import React from 'react';
import { Dialog } from '@uiToolkit/Dialog';
import { NextPage } from 'next';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/react';

interface PageProps {}

const Drawer: NextPage<PageProps> = ({}: PageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      TEST
      <button onClick={onOpen}>onOpen </button>
      <Dialog isOpen={isOpen} onClose={onClose} showCloseButton={true}>
        Content chidlren
      </Dialog>
    </Box>
  );
};

export default Drawer;
