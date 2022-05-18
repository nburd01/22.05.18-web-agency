import React from 'react'
import { useLocation} from 'react-router-dom'


export default function Platon() {

    const location = useLocation
    console.log(location);

  return (
    <div>
        <h2>Platon</h2>
    </div>
  )
}
