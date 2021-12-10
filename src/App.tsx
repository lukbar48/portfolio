import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Header from 'components/templates/Header/Header';
import Navbar from 'components/templates/Navbar/Navbar';
import Projects from 'components/templates/Projects/Projects';
import Tech from 'components/templates/Tech/Tech';
import About from 'components/templates/About/About';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Tech />
      </ThemeProvider>
    </Router>
  );
}

export default App;
