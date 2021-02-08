import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import createStore from './store/store';
import App from './App';
import theme from './theme';

const store = createStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <Provider store={store}>
      <App />
    </Provider>
    <CssBaseline />
  </ThemeProvider>,
  document.querySelector('#root')
);
