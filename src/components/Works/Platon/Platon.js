import React from 'react'
import { useLocation} from 'react-router-dom'


export default function Platon() {

    const location = useLocation
    console.log(location);

  return (
    <div>
        <h2>Le challenge</h2>
        <p>Platon a décidé de se lancer à l'époque malgré une crise économique difficile.</p>
        <p>Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.</p>
    </div>
  )
}
