import React from 'react';
import { Box, Drawer, DrawerContent, DrawerOverlay, Grid, GridItem, ScaleFade } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import { ThemeType } from '@themes/clients/baseTheme';
import { Button } from '@uiToolkit/Button';
import { BUTTON_SIZE } from '@uiToolkit/Button/Button';
import { Close } from '@assets/iconComponents';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  extensionChildren?: React.ReactNode;
  mainContentColWidth?: number;
  extensionContentColWidth?: number;
  isFullSize?: boolean;
}

const calculateDialogSize = ({
  colWidth,
  mainContentColWidth,
  extensionContentColWidth,
  isFullSize,
}: {
  colWidth: string;
  mainContentColWidth: number;
  extensionContentColWidth: number;
  isFullSize: boolean;
}) => {
  if (mainContentColWidth + extensionContentColWidth === 16) {
    // as we have max 16 col layout system
    isFullSize = true;
  }
  if (mainContentColWidth + extensionContentColWidth > 16) {
    console.error(
      "The sum of mainContentColWidth and extensionChildren should not exceed 16, as it's the max number of columns as per layout design",
    );
  }
  const values = {
    // Todo: variable height support: content height if smaller than available, else fixed max height as defined currently
    top: `calc(${colWidth} + 12px)`,
    width: `calc(${colWidth} * 16 - 24px)`,
  };
  if (isFullSize) {
    return values;
  }
  values.width = `calc(${colWidth} * ${mainContentColWidth + extensionContentColWidth} - 12px)`;
  return values;
};

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  showCloseButton = false,
  extensionChildren = null,
  mainContentColWidth = 8,
  extensionContentColWidth = 0,
  isFullSize = false,
}) => {
  const theme: ThemeType = useTheme();
  const visibleExtensionColWidth = !!extensionChildren ? extensionContentColWidth : 0;

  const dimensionPropStyles = calculateDialogSize({
    colWidth: theme.layout.colWidth,
    mainContentColWidth,
    extensionContentColWidth: visibleExtensionColWidth,
    isFullSize,
  });

  const maxColWidth = mainContentColWidth + extensionContentColWidth;

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
        bottom={0}
        right={0}
        mr="12px"
        {...dimensionPropStyles}
      >
        {showCloseButton && (
          <Button
            StartIcon={Close}
            size={BUTTON_SIZE.large}
            onClick={onClose}
            position="absolute"
            top="-52px"
            right="0"
          >
            Close
          </Button>
        )}
        <Grid h="100%" templateColumns={`repeat(${maxColWidth}, 1fr)`}>
          <GridItem colSpan={visibleExtensionColWidth ? mainContentColWidth : maxColWidth}>
            <Box overflowY="auto">{children}</Box>
          </GridItem>
          <GridItem colSpan={visibleExtensionColWidth}>
            <ScaleFade in={!!extensionChildren}>
              <Box overflowY="auto" style={{ transition: 'width .25s ease-in-out' }}>
                {extensionChildren}
              </Box>
            </ScaleFade>
          </GridItem>
        </Grid>
      </DrawerContent>
    </Drawer>
  );
};
