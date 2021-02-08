import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Dashboard from './containers/Dashboard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Job Be Mine
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="lg">
      <Router>
        <Switch>
          <Route path="/people">
            <Dashboard />
          </Route>
          <Route path="/jobs">
            <Dashboard />
          </Route>
          <Route path="/stats">
            <Dashboard />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      <Copyright />
    </Container>
  );
}
