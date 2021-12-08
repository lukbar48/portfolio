import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import Projects from 'components/Projects/Projects';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Navbar />
          <Header />
          <Projects />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
