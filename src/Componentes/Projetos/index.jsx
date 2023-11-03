import CardsProject from "./CardsProjects"
import CardsTech from "./CardsTech"
import sAcessi from "../../assets/Projetos/siteAcessibilidade.png"
import apiClima from "../../assets/Projetos/apiClima.png"
import quizImg from "../../assets/Projetos/quiz.png"
import cardapio from "../../assets/Projetos/cardapio.png"
import gerador from "../../assets/Projetos/geradorPass.png"
import burger from "../../assets/Projetos/burger.png"

import './Projetos.css'
export default function Projetos() {
    return (
      <div id="boxCardsProje">
        {/*<div id="containerTechs">
      <h1 className="titles" id='titleTech'>Tecnologias</h1>
      <div id='divTechs'>
        <CardsTech svgTech={<svg width="60px" height="60px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#78C1F3"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#78C1F3"></path> <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="black"></path> </g></svg>} nameTech={'HTML'}/>
        <CardsTech svgTech={<svg width="60px" height="60px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#78C1F3"></path> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#78C1F3"></path> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="black"></path> </g></svg>} nameTech={'CSS'}/>
        <CardsTech svgTech={<svg xmlns="http://www.w3.org/2000/svg" aria-label="Sass" role="img" viewBox="0 0 512 512" width="60px" height="60px" fill="#78C1F3" stroke="#78C1F3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#"></rect><path d="M258,88c-96,33-158,100-152,140s66,72,93,93h0c-35,18-79,45-78,80,2,48,54,33,76,19s44-53,30-94c31-8,58,2,66,8,31,22,15,47,4,51s-4,6,3,4,22-12,22-29c0-43-46-63-103-48-33-35-78-51-76-89,1-14,6-50,95-95s152-27,144,14c-12,62-120,104-158,68-2-4-9-7-5,4,20,50,182,27,189-79C410,79,329,64,258,88ZM172,408c-25,8-24-8-23-14,3-17,17-38,59-59C220,373,193,402,172,408Z" fill="#000000"></path></g></svg>} nameTech={'Sass'}/>
        <CardsTech svgTech={<svg fill="#78C1F3" width="60px" height="60px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 11.714286,1 2.285714,1 C 1.575893,1 1,1.57589 1,2.28571 l 0,9.42858 C 1,12.42411 1.575893,13 2.285714,13 l 9.428572,0 C 12.424107,13 13,12.42411 13,11.71429 L 13,2.28571 C 13,1.57589 12.424107,1 11.714286,1 Z m -4.183929,9.35893 c 0,1.16786 -0.685714,1.70089 -1.684821,1.70089 -0.902679,0 -1.425,-0.46607 -1.692857,-1.03125 l 0.91875,-0.55446 c 0.176785,0.31339 0.3375,0.57857 0.725892,0.57857 0.369643,0 0.605358,-0.14464 0.605358,-0.70982 l 0,-3.83304 1.127678,0 0,3.84911 z m 2.667857,1.70089 c -1.047321,0 -1.725,-0.49821 -2.054464,-1.15178 L 9.0625,10.37768 c 0.241071,0.39375 0.557143,0.68571 1.111607,0.68571 0.466072,0 0.766072,-0.23303 0.766072,-0.55714 0,-0.38571 -0.305358,-0.52232 -0.822322,-0.75 L 9.836607,9.63571 C 9.022321,9.29018 8.483929,8.85357 8.483929,7.93482 c 0,-0.84643 0.645535,-1.48928 1.65,-1.48928 0.717857,0 1.232142,0.2491 1.601785,0.90267 l -0.878571,0.5625 C 10.664286,7.56518 10.455357,7.42857 10.13125,7.42857 c -0.329464,0 -0.538393,0.20893 -0.538393,0.48214 0,0.3375 0.208929,0.47411 0.69375,0.68572 l 0.28125,0.12053 c 0.958929,0.40983 1.497322,0.83036 1.497322,1.77322 0,1.0125 -0.798215,1.56964 -1.866965,1.56964 z"></path></g></svg>} nameTech={'Javascript'}/>
        <CardsTech svgTech={<svg width="60px" height="60px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </g></svg>} nameTech={'React Js'} />
        <CardsTech svgTech={<svg width="60px" height="60px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#78C1F3142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#78C1F3"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#78C1F3142]"> </path> </g> </g> </g> </g></svg>} nameTech={'Git Hub'}/>
      </div>
      </div>*/}
        <CardsProject 
        imgProject={sAcessi} 
        altImg='Landing Page acessibilidade' 
        nameProject='Landing Page acessibilidade' 
        descriProject='O site é uma página da web projetada com foco na acessibilidade. Ao acessar o site, a primeira coisa que se destaca é a sua abordagem clara e funcional para garantir que pessoas com diferentes tipos de deficiências possam navegar e interagir com o conteúdo de maneira eficaz. '
        linkPro='https://lading-page-acessibilidade.vercel.app/'
        techs={
        <>
        <CardsTech nameTech='HTML'/>
        <CardsTech nameTech='CSS'/>
        </>
        }
        />
        <CardsProject 
        imgProject={apiClima}
        altImg='Api de Clima'
        nameProject='Api Clima' 
        descriProject='O website é uma plataforma online que oferece informações detalhadas sobre as condições climáticas em várias regiões. Ao acessar o site, você é recebido por uma interface intuitiva e amigável que torna a obtenção de informações climáticas uma experiência simples e direta.' 
        linkPro='https://apiclima-three.vercel.app/'
        techs={
          <>
          <CardsTech nameTech='HTML'/>
          <CardsTech nameTech='CSS'/>
          <CardsTech nameTech='React'/>
          </>
          }
        />
        <CardsProject 
        imgProject={gerador} 
        altImg='Gerador de senhas' 
        nameProject='Gerador de Senhas' 
        descriProject='O site é uma ferramenta online projetada para gerar senhas seguras e aleatórias.Ao acessar o site, você é apresentado a uma interface simples e direta, cujo objetivo principal é auxiliar os usuários na criação de senhas robustas para garantir a segurança de suas contas online.' 
        linkPro='https://gerador-senhas-2qovjqoft-caiosantos00.vercel.app/'
        techs={
          <>
          <CardsTech nameTech='HTML'/>
          <CardsTech nameTech='CSS'/>
          <CardsTech nameTech='React'/>
          </>
          }
        />
        <CardsProject 
        imgProject={burger} 
        altImg='Landing Page Hamburger' 
        nameProject='Landing Page Hamburgueria' 
        descriProject='Em construção&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;' 
        linkPro=''
        techs={
          <>
          <CardsTech nameTech='HTML'/>
          <CardsTech nameTech='CSS'/>
          <CardsTech nameTech='React'/>
          </>
          }
        />
        <CardsProject 
        imgProject={cardapio} 
        altImg='Cardápio de hamburgueria'
       nameProject='Cardápio' 
       descriProject='O website é uma página que apresenta o cardápio de uma hamburgueria de maneira atrativa e organizada. Ao acessar o site, você é recebido por uma interface visualmente agradável que exibe as opções de hambúrgueres e outros itens oferecidos pelo estabelecimento.' 
       linkPro='https://cardapio-hamburgueria.vercel.app/'
       techs={
        <>
        <CardsTech nameTech='HTML'/>
        <CardsTech nameTech='CSS'/>
        </>
        }
       />
        <div id="divBreve"><span className="nameProject">Em breve novos projetos...</span></div>
      </div>
    )
  }
  
  