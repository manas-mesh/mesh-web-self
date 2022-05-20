import React from 'react';
import { Box, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import { ThemeType } from '@themes/clients/baseTheme';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children, showCloseButton = false }) => {
  const theme: ThemeType = useTheme();
  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => {
        onClose && onClose();
      }}
      placement="bottom"
    >
      <DrawerOverlay />
      <DrawerContent
        borderRadius="16px 16px 0 0"
        ml="auto"
        bg={theme.colors.surfaces.g96}
        boxShadow={theme.shadows.dark}
        top={`calc(${theme.layout.colWidth} + 12px)`}
        position="absolute"
        bottom={0}
        w={`calc(${theme.layout.colWidth} * 8 - 12px)`}
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
