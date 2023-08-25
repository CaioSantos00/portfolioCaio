import { Link, useLocation } from 'react-router-dom'
import "./header.css"
import { useState, useEffect } from 'react'

export default function Header() {
  let [menu, setMenu] = useState(false)
  const location = useLocation();
  useEffect(() => {
    setMenu(false);
  }, [location]);
  function toogleMenu() {
    setMenu(!menu)
  }
  return (
    <>
    <header id='header'>
     <span id='tagCode'>&#60;&#47;&#62;</span>
        <nav id='menu-pc'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
        </ul>
        </nav>        
    </header>   
        <header id='header2'>
        <button id='btnMenu' onClick={toogleMenu}><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#8099eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
        <nav id={`menu-cell${menu ? 'open' : ''}`}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
        </ul>
        </nav>
        </header>
    </>
  )
}

