import React from 'react';
import { Typography } from "@material-ui/core";
import { Container } from './components/container'
import { AboutCard } from './components/about';

function App() {
  return (
    <div>
      <Container>
        <Typography variant='h2'>
          No estas solo grupo anonimo
        </Typography>
        <Typography variant='body2'  >
          Estamos aqui para poder brindar ayuda a personas con problemas de depresion.
            <AboutCard />
        </Typography>
      </Container>
    </div>
  );
}

export default App;
