import React from 'react';
import { Container } from './components/container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AboutCard } from './components/about';
import { SignIn } from "./components/signin";
import { Typography } from '@material-ui/core';
import { Navbar } from './components/navbar';

let title = 'NESGAA';

function App() {
  document.title = title;
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={AboutCard} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="*" >
            <Typography
              color="secondary"
              variant="h2"
              component="span"
            >
              Error 404 - Page not found
            </Typography>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
