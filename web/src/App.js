import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Content, GlobalStyle, Logo } from './assets/styles/global';

import Routes from './routes';

import logo from './assets/logo.svg';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Logo src={logo} alt="AirCnC" />

        <Content>

          <Routes />
        </Content>
      </Container>
    </BrowserRouter>
  );
}

export default App;
