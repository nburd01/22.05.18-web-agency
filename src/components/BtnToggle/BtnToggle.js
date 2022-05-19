import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'


export default function BtnToggle() {
 
  const theme = useContext(ThemeContext);
  const mode = (theme.currentTheme === 'light') ? 'Darkmode OFF' : 'Darkmode On'

  return (
    <button className='btn-toggle' onClick={theme.toggleTheme}>{mode}</button>
  )
}
