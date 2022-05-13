import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { StyledEngineProvider } from '@mui/styled-engine';
import GlobalStylesCSSReset from '../src/styles/CSSReset';
import GlobalStylesBase from '../src/styles/Base';
import { baseTheme } from '../src/themes/clients/baseTheme';

const Decorators = (storyFn) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={baseTheme}>
      <GlobalStylesCSSReset />
      <GlobalStylesBase />
      {storyFn()}
    </ThemeProvider>
  </StyledEngineProvider>
);

export default Decorators;
