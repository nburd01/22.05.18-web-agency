import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'
import Navbar from './components/Navbar/Navbar'
import Platon from './components/Works/Platon/Platon'
import Sedal from './components/Works/Sedal/Sedal'
import Solane from './components/Works/Solane/Solane';
import ThemeContext from './components/context/ThemeContext';
import BtnToggle from './components/BtnToggle/BtnToggle';
// import useLocalStorage from 'use-local-storage'
import React, {useState, useEffect} from "react";
import "./App.css"

function App() {

  const [currentTheme, setCurrentTheme] = useState(localStorage.selectTheme || 'light');

  useEffect (() => {localStorage.setItem('selectTheme', currentTheme)}, [currentTheme]);

  return (
    <ThemeContext.Provider value={{currentTheme, toggleTheme: () => {currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light")}}}>
      <div className={currentTheme === "light" ? "app light" : "app dark"}>
          <Navbar />
          <BtnToggle />
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/works' element={<Works />}>
              <Route path='/works/platon' element={<Platon />}/>
              <Route path='/works/sedal' element={<Sedal />}/>
              <Route path='/works/solane' element={<Solane />}/>
            </Route> 
            {/* <Route path='/works/*' element={<Works />} />  */}
          </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
