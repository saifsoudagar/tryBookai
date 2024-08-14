import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Overview from './components/Overview'
import Authentication from './components/Authentication'
import Endpoints from './components/Endpoints'
import Tutorial from './components/Tutorial'
import Code_example from './components/Code_example'
import Pricing from './components/Pricing'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  const darkTheme = () => {
    setThemeMode('dark');
  };
  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div
        className={`min-h-screen relative ${themeMode === 'dark' ? 'bg-[#0f172a]' : 'bg-white'} pb-3`}
      >
        <Header />
        <Overview />
        <Authentication />
        <Endpoints />
        <Tutorial />
        <Code_example />
        <Pricing />
      </div>
    </ThemeProvider>
  );
}

export default App;
