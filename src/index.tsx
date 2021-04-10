import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import CSSReset from './components/CSSReset';
import theme from './utils/theme';

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
