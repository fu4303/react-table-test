/// <reference types="react-scripts" />
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      border: string;
      text: {
        light: string;
        medium: string;
        dark: string;
      };
      bg: {
        lightest: string;
        light: string;
        medium: string;
        dark: string;
        darker: string;
      };
    };
    spacing: {
      baseSpace: number;
      wrapWidth: number;
    };
  }
}
