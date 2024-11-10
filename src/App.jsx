import React, { useContext } from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, ThemeContext } from './components/themes/ThemeContext';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <section className={`App ${theme}`} >
        <RoutesApp />
      </section>
  );
};

export default App;