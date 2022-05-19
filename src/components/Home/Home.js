import React, {useContext} from 'react'
import '../../App.css'
import { ThemeContext } from '../../context/ThemeContext'

export default function Home() {

  const{theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'Dark' : 'Light' }>
        <h1>Confiez vos rêves à des experts du Web</h1>
        <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
            Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.</p>
    </div> 
  )
}
