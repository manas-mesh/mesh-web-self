// Just for the puspose of wrapping layout based component stories in storybook

import { Box, Container } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export const AppLayoutDummyWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Container h="100vh" minH="500px" minW="1024" bg="lightgrey" maxW="1440">
    <Box
      // borderRadius={4} check with sree if needed for this top-level container, also overflow:hidden will be required to actually clip content from child elements
      display="flex"
      sx={{ height: '100%', width: '100%' }}
    >
      {/* nav rail */}
      <Box bg="aliceblue" sx={{ width: (theme) => theme.layout.colWidth }}>
        NavRail
      </Box>

      <Box display="flex" flex={1} flexDirection="column" justifyContent="stretch">
        {/* top bar */}
        <Box bg="cornsilk" sx={{ flex: (theme) => `0 0 ${theme.layout.colWidth}` }}>
          TopBar
        </Box>

        <Box flex={1} overflow="auto">
          {children}
        </Box>
      </Box>
    </Box>
  </Container>
);
