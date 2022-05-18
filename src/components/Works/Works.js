import React from 'react'
import './Works.css'
import {Link, Outlet} from 'react-router-dom'

export default function Works() {

  return (
    <div>
        <h1>Works</h1>
        <nav>
            <Link to="/works/platon">Platon</Link>
            <Link to="/works/sedal">Sedal</Link>
            <Link to="/works/solane">Solane</Link>
        </nav>
        <Outlet />
    </div> 
  )
}
