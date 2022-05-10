// Libraries
import { ThemeProvider } from '@emotion/react';

// Types
import type { AppProps } from 'next/app';

// Styles
import GlobalStylesCSSReset from '@styles/CSSReset';
import GlobalStylesBase from '@styles/Base';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStylesCSSReset />
      <GlobalStylesBase />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
