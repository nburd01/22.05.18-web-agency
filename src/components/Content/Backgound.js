import React, {useContext} from 'react'
import '../../App.css'
import { ThemeContext } from '../../context/ThemeContext'

export default function Content() {

    const{theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'Dark' : 'Light' }>
  
    </div> 
  )
}
