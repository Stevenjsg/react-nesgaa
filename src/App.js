import React from 'react';
import { Container } from './components/container'
import { AboutCard } from './components/about';
const title = 'NESGAA';

function App() {
  document.title = title;
  return (
    <Container>
      <AboutCard />
    </Container>
  );
}

export default App;
