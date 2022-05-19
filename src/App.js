import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'
import Navbar from './components/Navbar/Navbar'
import Platon from './components/Works/Platon/Platon'
import Sedal from './components/Works/Sedal/Sedal'
import Solane from './components/Works/Solane/Solane';
import ThemeContextProvider from './context/ThemeContext';
import BtnToggle from './components/BtnToggle/BtnToggle';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </div>
  );
}

export default App;
