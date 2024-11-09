import { createContext, useState } from 'react';

// Crea el contexto
export const ThemeContext = createContext();

// Crea el proveedor del tema
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  //alternar entre temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


// // Crea el contexto
// export const ThemeContext = createContext();

// // Crea el proveedor del tema
// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');

//   //alternar entre temas
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }