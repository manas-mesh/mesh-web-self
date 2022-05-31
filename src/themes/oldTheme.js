// import { blue } from '@mui/material/colors';
// import { createMuiTheme, responsiveFontSizes } from '@mui/material/styles';

import { createTheme, responsiveFontSizes } from '@mui/material';
import { blue } from '@mui/material/colors';

// export const primaryColor = '#008EF0';
export const primaryColorWithOpacity = (opacity = 1) => `rgba(0, 142, 240, ${opacity})`;
export const secondaryColorWithOpacity = (opacity = 1) => `rgba(255, 194, 0, ${opacity})`;
export const greenColorWithOpacity = (opacity = 1) => `rgba(92, 196, 97, ${opacity})`;
export const yellowColorWithOpacity = (opacity = 1) => `rgba(247, 215, 8, ${opacity})`;
export const redColorWithOpacity = (opacity = 1) => `rgba(236, 59, 100, ${opacity})`;
export const orangeColorWithOpacity = (opacity = 1) => `rgba(255, 150, 74, ${opacity})`;

export const primaryColor = '#008EF0';

// const secondaryColor = secondaryColorWithOpacity(1);
// const green = greenColorWithOpacity(1);
// const red = redColorWithOpacity(1);
// const yellow = yellowColorWithOpacity(1);
const orange = orangeColorWithOpacity(1);
const secondaryColor = '#FFC200';
const green = '#5CC461';
const red = '#EC3B64';
const yellow = '#F7D708';
const darkGreen = '#099c10';
const mustard = '#E8C061';
export const themeObject = {
  breakpoints: {
    values: {
      xs: 400,
      sm: 800,
      md: 1280,
      lg: 1440,
      lg1: 1600,
      xl: 1920,
    },
    //     {
    //   "xs": 0,
    //   "sm": 600,
    //   "md": 960,
    //   "lg": 1280,
    //   "xl": 1920
    // }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      dark: '#0063a8',
      main: primaryColor,
      light: '#33a4f3',
    },
    secondary: {
      main: secondaryColor,
      light: secondaryColor,
    },
    green: {
      main: green,
      light: greenColorWithOpacity(0.25),
      dark: darkGreen,
      medium: '#78c16d',
    },
    lightOrange: { main: '#FF964A' },
    red: {
      main: red,
      light: '#ef5c7e',
      dark: '#d11440',
    },
    blue: {
      main: blue,
      toolTip: '#0A2B41',
    },
    orange: {
      main: orange,
      light: orangeColorWithOpacity(0.25),
    },
    purple: {
      main: '#7074D5',
    },
    yellow: {
      main: yellow,
      light: yellowColorWithOpacity(0.25),
    },
    mustard: {
      main: mustard,
    },
    grey: {
      main: '#999999',
      light: '#FAFAFA',
      dark: '#666666',
    },
    icons: {
      deepBlack: '#000',
      black: '#323846',
      black2: '#333',
      grey: '#9B9B9B',
      borderColor: '#EAEAEA',
      blue: '#3A8EE9',
      blue2: '#2A94F4',
      red: '#EF5D7E',
      grey2: '#999999',
      green: '#77C16C',
      mediumGrey: '#666',
      white: '#fff',
      grey3: '#C4C4C4',
      grey4: '#AAA',
      golden: '#FFE17D',
      dark: '#666666',
      blackv1: '#333333',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    borders: {
      black: '#323846',
      bluishGrey: '#E0EDFF',
      lightGrey: '#E1E1E1',
      lighterGrey: '#EAEAEA',
      darkGrey: 'hsl(0,0%,50%)',
      primary: '#3A8EE9',
      mediumGrey: '#c3c3c3',
      grey: '#9B9B9B',
      grey2: '#c8c8c8',
      green: '#77C16C',
      blue: '#008EF0',
      black20: '#0000003b',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      secondaryLight: '#C8C8C8',
      black1: '#122322',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
      placeholder: '#9B9B9B',
      heading: '#333',
      label: '#999999',
      navyBlue: '#0B4870',
      black: '#000000',
      blue: '#3A8EE9',
      blue2: '#2A94F4',
      primaryBlue: primaryColor,
      white: '#fff',
      dark1: '#666',
      green: '#77C16C',
      red: '#EF5D7E',
      blackv1: '#333333',
    },
    divider: '#EAEAEA',
    background: {
      default: '#F1F3F5',
      // default: '#EEF1F5',
      paper: '#ffffff',
      tableHeader: '#F2F1F5',
      grey: '#F6F6F7',
      lightBlue: '#e9f6ff',
      lightBlue40: '#e9f6ff40',
      lightBlue2: '#CAE9FE',
      lighterBlue: '#e9f6ff80',
      lightGrey: '#FAFAFA',
      lightGrey2: '#F1F1F1',
      lightGrey3: '#EAEAEA',
      lightGrey4: '#F7F7F7',
      lightGrey5: '#d8d8d8',
      darkGrey: '#9B9B9B',
      seagreen: '#e1f9e2',
      navyBlue: '#0B4870',
      blue: {
        light: {
          v1: '#F0F5F9',
          v2: '#e9f6ff',
        },
        dark: {
          v1: '#3A8EE9',
          v2: '#e9f6ff',
          v3: '#cce8fc',
        },
      },
      black: {
        v1: '#333333',
      },
      red: '#FAE8E8',
    },
    bgSectionHeader: '#EDEDED',
    graphs: {
      lightBlue: '#BDE9EC',
      mustard: secondaryColor,
      yellow,
      green: green,
      red: red,
      lightOrange: '#FF964A',
      orange: '#FF3B30',
      blue: primaryColor,
      lightGrey: '#9B9B9B',
      brickRed: '#EF5D7E',
      mustard2: mustard,
      darkGreen: '#77C16C',
    },
    shadows: {
      card: 'rgb(60 64 67 / 30%)',
      popper: 'rgba(0, 0, 0, 0.11)',
    },
    ripple: red,
  },
  space: {
    horizontal: {
      normal: '1rem',
    },
    vertical: {
      normal: '0.8rem',
      large: '1rem',
    },
  },
  itemSpace: {
    horizontal: {
      small: '0.5rem',
      normal: '0.7rem',
    },
    vertical: {
      small: '0.4rem',
      normal: '0.6rem',
      large: '0.8rem',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h6: {
      lineHeight: 1.1,
    },
  },
  spacing: 0.5,
  customBreakpoints: {
    xss: 321, // extra small phones
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application!
      },
    },
  },
};
export let oldTheme = createTheme(themeObject);
oldTheme = responsiveFontSizes(oldTheme);
// window.theme = theme;

// Using the default spacing value that comes with material ui and creating a new theme
// this is used for datePicker
export const originalSpacingTheme = responsiveFontSizes(createTheme({ ...themeObject, spacing: 8 }));
