import { DefaultTheme } from 'react-native-paper';

type P = typeof Palette;
declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      semiBold: {
        fontFamily: string;
      };
      bold: {
        fontFamily: string;
      };
    }

    interface ThemeColors extends P {}
  }
}

export const Palette = {
  p: {
    100: '#DD1010',
    75: '#E64C4C',
    50: '#EE8888',
    25: '#F6C3C3',
    10: '#FCE8E8'
  },
  a: {
    100: '#F2DA00',
    75: '#F5E340',
    50: '#F9ED80',
    25: '#FBF5BF',
    10: '#FEFCE6'
  },
  b: {
    100: '#050404',
    75: '#444343',
    50: '#828282',
    25: '#C0C0C0',
    10: '#E6E6E6'
  }
};

const theme = {
  dark: false,
  roundness: 25,
  colors: {
    ...DefaultTheme.colors,
    primary: Palette.p[100],
    background: '#fff',
    accent: Palette.a[100],
    error: Palette.p[100],
    text: Palette.b[75],
    surface: Palette.b[10],
    onSurface: Palette.b[75],
    onBackground: Palette.b[75],
    disabled: Palette.b[25],
    placeholder: Palette.b[25],
    backdrop: Palette.b[25],
    notification: Palette.a[50],
    ...Palette
  },
  fonts: {
    regular: { fontFamily: `Poppins-Regular` },
    medium: { fontFamily: 'Poppins-Medium' },
    light: { fontFamily: 'Poppins-Light' },
    semiBold: { fontFamily: 'Poppins-SemiBold' },
    bold: { fontFamily: 'Poppins-Bold' },
    thin: { fontFamily: 'Poppins-Light' }
  },
  animation: {
    ...DefaultTheme.animation
  }
};

export default theme;
