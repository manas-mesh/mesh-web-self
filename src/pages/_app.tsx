// Libraries
import { ThemeProvider } from '@emotion/react';

// Types
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../store/';

// Themes
import { baseTheme } from '@themes/clients/baseTheme';

// Styles
import GlobalStylesCSSReset from '@styles/CSSReset';
import GlobalStylesBase from '@styles/Base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStylesCSSReset />
        <GlobalStylesBase />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
