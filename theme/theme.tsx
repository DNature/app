import { createText, createTheme } from '@shopify/restyle';

const palette = {
  primary: {
    100: '#DD1010',
    75: '#E64C4C',
    50: '#EE8888',
    25: '#F6C3C3',
    10: '#FCE8E8'
  },
  accent: {
    100: '#F2DA00',
    75: '#F5E340',
    50: '#F9ED80',
    25: '#FBF5BF',
    10: '#FEFCE6'
  },
  black: {
    100: '#050404',
    75: '#444343',
    50: '#828282',
    25: '#C0C0C0',
    10: '#E6E6E6'
  }
};

const theme = createTheme({
  colors: {
    'p-100': palette.primary[100],
    'p-75': palette.primary[75],
    'p-50': palette.primary[50],
    'p-25': palette.primary[25],
    'p-10': palette.primary[10],
    'b-100': palette.black[100],
    'b-75': palette.black[75],
    'b-50': palette.black[50],
    'b-25': palette.black[25],
    'b-10': palette.black[10],
    'a-100': palette.accent[100],
    'a-75': palette.accent[75],
    'a-50': palette.accent[50],
    'a-25': palette.accent[25],
    'a-10': palette.accent[10],
    white: '#fff'
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  textVariants: {
    title1: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 36,
      fontFamily: 'Poppins-SemiBold'
    },
    title2: {
      fontSize: 18,
      lineHeight: 27,
      fontFamily: 'Poppins-Regular',
      color: 'b-50'
    }
  }
});

export type Theme = typeof theme;
export default theme;
