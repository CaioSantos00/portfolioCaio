import Carrosel from './Carrosel'
import BoxContacts from './BoxContacts'
import './Sobre.css'
import pc from '../../assets/pc.png'
import cell from '../../assets/cell.png'

export default function Sobre() {
  return (
    <>

      <div id="boxSobreTechs">
        <div id='divPc'>
          <img src={pc} alt="Computador" id='imgPc' />
        </div>
        <div id='boxSobre'>
          <div id='textSobre'>
            <h1 className="titles">Conheça mais sobre</h1>
            <p>
            Olá! Me chamo Caio dos Santos Oliveira, um jovem estudante com grande foco no desenvolvimento Full-Stack. Atualmente, estou com 17 anos e possuo um grande amor pelo mundo da tecnologia. 
            <br />&nbsp;&nbsp;No momento, cursando Superior de Tecnologia em Sistemas para Internet na Faculdade Cruzeiro do Sul Virtual. <br />&nbsp;&nbsp;Busco constantemente por atualizações e aprendizado em relação às novas tecnologias.
Meu objetivo primordial consiste em iniciar no mercado de trabalho como um desenvolvedor front-end, assim adquirindo um vasto conhecimento e experiência. Estou disposto a abraçar cada novo desafio que seja apresentado.
            </p>
          </div>
        </div>
      </div>
      <div id="divContacts">
        <div id="meiosContacts">
          <div id='divTexts'>
           <h1 className="titles" id='titleContact'>Vamos trabalhar juntos</h1>
           <span id='textContact'>Para consultas de negócios e parcerias, entre em contato comigo abaixo! <br /></span>
          </div>
          <div id='boxInfoAndCell'>
          <div id='divInfos'>
            <BoxContacts svg={<svg fill="#78C1F3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="38px" height="38px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml: space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <path d="M327.125,383.969c5.703,0.016,56.875-37.828,56.875-42.656s-57.266-40.906-62.219-40.906s-21.578,19.938-26.062,22.156 c-4.5,2.219-32.5,1.422-63.703-29.781c-31.219-31.188-41.875-67.109-41.875-72.75s26.031-23.062,26.75-27.156 S182.578,128,176.891,128S128,180.5,128,184.875s3.953,60.656,75.219,131.906S321.422,383.938,327.125,383.969z"></path> </g></svg>} textInfo='+55 (13) 99784-1230' />
            <BoxContacts svg={<svg fill="#78C1F3" height="38px" width="38px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" stroke="#78C1F3" stroke-width="5.632"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M384,128H128c-23.564,0-42.667,19.103-42.667,42.667v170.667C85.333,364.898,104.436,384,128,384h256 c23.564,0,42.667-19.102,42.667-42.667V170.667C426.667,147.103,407.564,128,384,128z M405.333,341.333 c0,11.782-9.551,21.333-21.333,21.333H128c-11.782,0-21.333-9.551-21.333-21.333V170.667c0-11.782,9.551-21.333,21.333-21.333 h256c11.782,0,21.333,9.551,21.333,21.333V341.333z"></path> <path d="M367.478,172.401c-0.141,0.098-0.28,0.199-0.417,0.303L256,253.483l-111.061-80.779 c-4.679-3.579-11.374-2.687-14.953,1.992s-2.687,11.374,1.992,14.953c0.136,0.104,0.275,0.205,0.417,0.303l117.333,85.333 c3.74,2.718,8.804,2.718,12.544,0l117.333-85.333c4.847-3.349,6.061-9.993,2.712-14.839 C378.968,170.266,372.325,169.052,367.478,172.401z"></path> <path d="M378.987,321.621l-85.333-53.333c-5.007-3.125-11.6-1.599-14.725,3.408c-3.125,5.007-1.599,11.6,3.408,14.725 l85.333,53.333c5.007,3.125,11.6,1.599,14.725-3.408C385.52,331.339,383.994,324.747,378.987,321.621z"></path> <path d="M218.347,268.288l-85.333,53.333c-5.007,3.125-6.533,9.718-3.408,14.725s9.718,6.533,14.725,3.408l85.333-53.333 c5.007-3.125,6.533-9.718,3.408-14.725C229.947,266.689,223.354,265.163,218.347,268.288z"></path> <path d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M256,490.667 C126.603,490.667,21.333,385.397,21.333,256S126.603,21.333,256,21.333S490.667,126.603,490.667,256S385.397,490.667,256,490.667 z"></path> </g> </g> </g> </g></svg>} textInfo='caiossantos4321@gmail.com'/>
            <BoxContacts svg={<svg fill="#78C1F3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve" width="38px" height="38px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path> <rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect> <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path> <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path> </g> </g></svg>} textInfo='www.linkedin.com/in/caiosantosoliveira'/>
          </div>
          <div id="imgCell">
            <img src={cell} id='cell' alt='Celular' />
          </div>
          </div>
        </div>
      </div>
      <div id='divCerti'>
        <h1 className="titles" id='titleCerti'>Certificações</h1>
        <Carrosel />
      </div>
    </>
  )
}