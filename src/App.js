import React, { useState, useEffect } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import darkBackground from './components/images/DarkBackgroun1.jpg';
import lightBackground from './components/images/light.jpg';

function App() {
  const [darkMode, setDarkMode] = React.useState(() => {
    const DM = JSON.parse(localStorage.getItem("mode"));
    return DM ? DM : false;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }
  document.body.style.backgroundImage = darkMode ? `url(${darkBackground})` : `url(${lightBackground})`;
  return (
    <div className='App'>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Search handleSearch={setSearch} darkMode={darkMode}/>
      <div className='Notes'>
        <AddNote search={search} darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
