import { DefaultTheme } from 'styled-components';

const colorPalette = {
  white: '#ffffff',
  primary: '#07f',
  border: '#eeeeee',
  text: {
    light: '#909090',
    medium: '#757575',
    dark: '#505050',
  },
  bg: {
    lightest: '#ffffff',
    light: '#fafafa',
    medium: '#f1f1f1',
    dark: '#ededed',
    darker: '#aeb5bd',
  },
};

const theme: DefaultTheme = {
  colors: { ...colorPalette },
  spacing: {
    baseSpace: 8,
    wrapWidth: 912,
  },
};

export default theme;
