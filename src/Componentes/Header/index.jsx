import { Link } from 'react-router-dom'
import "./header.css"

export default function Header() {
  return (
    <>
    <header>
     <span id='tagCode'>&#60;&#47;&#62;</span>
        <nav>
        <ul>
            <li><Link to="/"><span id='home'>Home</span></Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
        </ul>
    </nav>
    </header>
    </>
  )
}

