import { colors, typography } from '../tokens';

export enum FONT_VARIANTS {
  body = 'body',
  label = 'label',
  title = 'title',
  headline = 'headline',
  display = 'display',
}

export enum FONT_SIZE_VARIANTS {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum FONT_WEIGHT_VARIANTS {
  light = 'light',
  regular = 'regular',
  bold = 'bold',
}

export type ThemeType = typeof baseTheme;

export const baseTheme = {
  colors: {
    surfaces: {
      white: colors.white,
      g20: colors.neutral.gray[20],
      g86: colors.neutral.gray[86],
      g90: colors.neutral.gray[90],
      g92: colors.neutral.gray[92],
      g94: colors.neutral.gray[94],
      g96: colors.neutral.gray[96],
      g98: colors.neutral.gray[98],
      g100: colors.neutral.gray[100],
      bg20: colors.neutral.blueGray[20],
      bg40: colors.neutral.blueGray[40],
      bg60: colors.neutral.blueGray[60],
      bg80: colors.neutral.blueGray[80],
      bg92: colors.neutral.blueGray[92],
      bg94: colors.neutral.blueGray[94],
      bg96: colors.neutral.blueGray[96],
      bg98: colors.neutral.blueGray[98],
      tw24: colors.neutral.transparentWhite[24],
      t48: colors.neutral.transparentWhite[48],
      gr100: colors.chromatic.green[100],
    },
    text: {
      white: colors.white,
      bg20: colors.neutral.blueGray[20],
      bg40: colors.neutral.blueGray[40],
      bg60: colors.neutral.blueGray[60],
      bg70: colors.neutral.blueGray[70],
      bg98: colors.neutral.blueGray[98],
      gr100: colors.chromatic.green[100],
    },
    border: {
      bg40: colors.neutral.blueGray[40],
      bg60: colors.neutral.blueGray[60],
      tw24: colors.neutral.transparentWhite[24],
      tw0: colors.neutral.transparentWhite[0],
      g92: colors.neutral.gray[92],
    },
    nav: {
      bg: colors.neutral.blueGray[100],
    },
    header: {
      bg: colors.neutral.blueGray[98],
    },
    icon: {
      black: colors.neutral.blueGray[20],
      white: colors.neutral.blueGray[100],
      disabled: colors.neutral.blueGray[40],
      red400: colors.chromatic.red[400],
      bg40: colors.neutral.blueGray[40],
      bg98: colors.neutral.blueGray[98],
    },
    formFields: {
      bg: colors.neutral.gray[92],
      hoverBg: colors.neutral.gray[96],
      focusBg: colors.neutral.gray[100],
      disableBg: colors.neutral.transparentWhite[48],
      transparentBg: colors.neutral.transparentWhite[0],
      textColor: colors.neutral.gray[20],
      labelColor: colors.neutral.gray[40],
      helperTextColor: colors.neutral.gray[40],
    },
    selectMenu: {
      bg: colors.neutral.gray[92],
      hoverItemBg: colors.neutral.gray[96],
      focusedItemBg: colors.neutral.gray[98],
    },
    rating: {
      bg: colors.neutral.gray[92],
      hoverBg: colors.neutral.gray[96],
      focusBg: colors.neutral.gray[100],
      disableBg: colors.neutral.transparentWhite[48],
      labelColor: colors.neutral.blueGray[40],
      iconColor: colors.neutral.blueGray[40],
    },
    errors: {
      fields: colors.chromatic.pink[500],
    },
  },
  fonts: {
    letterSpacing: {
      body: {
        small: '0.4px',
        medium: '0.25px',
        large: '0.15px',
      },
      label: {
        small: '0.5px',
        medium: '0.5px',
        large: '0.1px',
      },
      title: {
        small: '0.1px',
        medium: '0.15px',
        large: '0.1px',
      },
      headline: {
        small: 'normal',
        medium: 'normal',
        large: 'normal',
      },
      display: {
        small: 'normal',
        medium: 'normal',
        large: 'normal',
      },
    },
    size: {
      body: {
        small: typography.fontSizes['xs'], // 12px
        medium: typography.fontSizes['s'], // 14px
        large: typography.fontSizes['m'], // 16px
      },
      label: {
        small: typography.fontSizes['2xs'], // 11px
        medium: typography.fontSizes['xs'], // 12px
        large: typography.fontSizes['s'], // 14px
      },
      title: {
        small: typography.fontSizes['s'], // 14px
        medium: typography.fontSizes['m'], // 16px
        large: typography.fontSizes['l'], // 22px
      },
      headline: {
        small: typography.fontSizes['xl'], // 24px
        medium: typography.fontSizes['2xl'], // 28px
        large: typography.fontSizes['3xl'], // 32px
      },
      display: {
        small: typography.fontSizes['4xl'], // 36px
        medium: typography.fontSizes['5xl'], // 45px
        large: typography.fontSizes['6xl'], // 57px
      },
    },
    family: {
      primary: typography.fonts.roboto,
    },
    weight: {
      ...typography.fontWeights,
    },
  },
  shadows: {
    dark: '0px -4px 16px rgba(0, 0, 0, 0.16)',
    light: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  },
};
