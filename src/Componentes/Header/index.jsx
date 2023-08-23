import { Link } from 'react-router-dom'
import "./header.css"
import { useState } from 'react'

export default function Header() {
  let [menu, setMenu] = useState(false)
  function toogleMenu() {
    setMenu(!menu)
  }
  return (
    <>
    <header id='header'>
     <span id='tagCode'>&#60;&#47;&#62;</span>
     <button id='btnMenu' onClick={toogleMenu}><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#8099eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg> </button>
        <nav id='menu-pc'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
        </ul>
        </nav>        
    </header>
      <nav id={`menu-cell${menu ? 'open' : ''}`}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
        </ul>
        </nav>   
    </>
  )
}

