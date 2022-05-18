import React from 'react';
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { baseTheme } from '@themes/clients/baseTheme';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children, showCloseButton = false }) => {
  console.log({ isOpen });
  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {
        onClose && onClose();
      }}
      isFullHeight={false}
    >
      <DrawerOverlay />
      <DrawerContent
        borderRadius="16px 16px 0 0"
        ml="auto"
        bg={baseTheme.colors.surfaces.g96}
        boxShadow={baseTheme.shadows.dark}
        top="100px !important"
        position="absolute"
        bottom={0}
        right={0}
        width="500px"
        mr="12px"
        overflowY="auto"
      >
        {showCloseButton && <DrawerCloseButton />}
        {children}
      </DrawerContent>
    </Drawer>
  );
};
