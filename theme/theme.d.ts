import { Palette } from './theme';

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

    interface ThemeColors {
      p: string;
      a: string;
    }
  }
}
