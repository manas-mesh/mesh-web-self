import '@emotion/react';
import { ThemeProps, ThemeType } from '@themes/clients/baseTheme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
