import styled, { createGlobalStyle } from 'styled-components';

import background from '../background.jpg';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #000 url(${background}) no-repeat;
    background-size: cover;
    -webkit-font-smoothing: antialiased !important;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  #root {
    display: flex;

    width: 90vw;
    max-width: 450px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }

    #root {
      max-width: 500px;
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh !important;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem 0;
`;

export const Logo = styled.img``;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 3.1rem;
  padding: 2.5rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
