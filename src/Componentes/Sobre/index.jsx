import CardsTech from '../Projetos/CardsTech'
import Carrosel from './Carrosel'
import './Sobre.css'
import pc from '../../assets/pc.png'
import pc2 from '../../assets/pc2.png'
export default function Sobre() {
  return (
    <>
    
    <div id="boxSobreTechs">
      <div id='boxSobre'>
      <div id='textSobre'>
      <h1 className="titles">Conheça mais sobre</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae labore quis alias assumenda tempora totam sed obcaecati, reprehenderit nulla et iste perspiciatis laudantium. Repellendus modi obcaecati accusamus sunt pariatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, nemo minima! Laboriosam eum alias inventore ex illum nisi atque perspiciatis ab, hic, repellat, sapiente asperiores officia? Doloremque dignissimos deserunt aliquid.
      </p>
      <br />
      <button id='contact'>Entre em contato</button>
      </div>
      </div>
      <div>
        <img src={pc} alt="Computador" id='imgPc'/>
      </div>
     </div>
    <div id='divCerti'>
     <h1 className="titles" id='titleCerti'>Certificações</h1>
     <Carrosel/>
   </div>
    </>
  )
}