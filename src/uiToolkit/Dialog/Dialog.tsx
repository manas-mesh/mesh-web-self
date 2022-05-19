import React from 'react';
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, useTheme } from '@chakra-ui/react';
import { baseTheme } from '@themes/clients/baseTheme';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children, showCloseButton = false }) => {
  const theme = useTheme();
  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {
        onClose && onClose();
      }}
      isFullHeight={false}
      size={'xs'}
    >
      <DrawerOverlay />
      <DrawerContent
        borderRadius="16px 16px 0 0"
        ml="auto"
        bg={theme.colors.surfaces.g96}
        boxShadow={theme.shadows.dark}
        top="100px !important"
        position="absolute"
        bottom={0}
        right={0}
        mr="12px"
        overflowY="auto"
      >
        {showCloseButton && <DrawerCloseButton border={'none'} />}
        {children}
      </DrawerContent>
    </Drawer>
  );
};
