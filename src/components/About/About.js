import React, {useContext} from 'react'
import '../../App.css'
import { ThemeContext } from '../../context/ThemeContext'

export default function About() {

  const{theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'Dark' : 'Light' }>
        <h1>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h1>
        <p>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.</p>
    </div> 
  )
}
