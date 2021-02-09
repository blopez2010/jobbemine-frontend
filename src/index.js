import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import client from './adapters/api';
import createStore from './store/store';
import App from './App';
import theme from './theme';

import './styles/App.scss';

const store = createStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
    <CssBaseline />
  </ThemeProvider>,
  document.querySelector('#root')
);
