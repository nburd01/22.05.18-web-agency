import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
    </nav>
  )
}
