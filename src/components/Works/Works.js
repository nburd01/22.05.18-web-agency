import React from 'react'
import '../../App.css'
import {Link, Outlet} from 'react-router-dom'

export default function Works() {

  return (
    <div className='works'>
        <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
        <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        <nav>
            <Link to="/works/platon">Platon</Link>
            <Link to="/works/sedal">Sedal</Link>
            <Link to="/works/solane">Solane</Link>
        </nav>
        <Outlet />
    </div> 
  )
}
