// Libraries
import { ThemeProvider } from '@emotion/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

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
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <GlobalStylesCSSReset />
        <GlobalStylesBase />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
