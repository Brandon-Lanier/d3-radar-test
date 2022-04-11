import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

import store from './redux/store';

import App from './components/App/App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('react-root'),
);
