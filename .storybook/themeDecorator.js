import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { baseTheme } from '../src/themes/clients/baseTheme';

const ThemeDecorator = (storyFn) => <ThemeProvider theme={baseTheme}>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
