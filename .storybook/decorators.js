import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStylesCSSReset from '../src/styles/CSSReset';
import GlobalStylesBase from '../src/styles/Base';
import { ChakraProvider } from '@chakra-ui/react';
import { baseTheme } from '../src/themes/clients/baseTheme';

const Decorators = (storyFn) => (
  <ChakraProvider>
    <ThemeProvider theme={baseTheme}>
      <GlobalStylesCSSReset />
      <GlobalStylesBase />
      {storyFn()}
    </ThemeProvider>
  </ChakraProvider>
);

export default Decorators;
