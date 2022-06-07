// Libraries
import { ThemeProvider } from '@emotion/react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import ErrorBoundary from 'components/ErrorBoundary';

// Types
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

// Themes
import { baseTheme } from '@themes/clients/baseTheme';

// Styles
import GlobalStylesCSSReset from '@styles/CSSReset';
import GlobalStylesBase from '@styles/Base';
import { RouteGuard } from 'components/RouteGuard/RouteGuard';
import { AuthProvider } from 'components/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ChakraProvider>
        <ThemeProvider theme={baseTheme}>
          <GlobalStylesCSSReset />
          <GlobalStylesBase />
          <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
              <AuthProvider>
                <RouteGuard>
                  <Component {...pageProps} />
                </RouteGuard>
              </AuthProvider>
            </ErrorBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
