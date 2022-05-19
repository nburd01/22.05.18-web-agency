import React, {useContext} from 'react'
import '../../App.css'
import { ThemeContext } from '../../context/ThemeContext'
import {Link} from 'react-router-dom'

export default function Navbar() {

  const{theme} = useContext(ThemeContext);

  return (
    <nav className={theme ? 'Dark' : 'Light' }>
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
    </nav>
  )
}
