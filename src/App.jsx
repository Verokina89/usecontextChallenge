import React, { useContext } from 'react';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider, ThemeContext } from './components/themes/ThemeContext';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <section className={`App ${theme}`}>
        <RoutesApp />
      </section>
    </ThemeProvider>
  );
};

export default App;




// function App() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <ThemeProvider>
//       <section className={`App ${theme}`}>
//         <RoutesApp />
//       </section>
//     </ThemeProvider>
//   );
// }