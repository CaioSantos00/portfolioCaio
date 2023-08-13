import CardsProject from "./CardsProjects";
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
        <CardsProject imgProject={sAcessi} altImg='Landing Page acessibilidade' nameProject='Landing Page acessibilidade' descriProject='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at consectetur ea molestias ad reprehenderit odit veniam consequuntur. At eveniet quas officia nesciunt ipsam eos, quasi amet ullam quis consequatur.' linkPro='https://lading-page-acessibilidade.vercel.app/'/>
        <CardsProject imgProject={burger} altImg='Landing Page Hamburger' nameProject='Landing Page Hamburgueria' descriProject='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at consectetur ea molestias ad reprehenderit odit veniam consequuntur. At eveniet quas officia nesciunt ipsam eos, quasi amet ullam quis consequatur.' linkPro=''/>
        <CardsProject imgProject={apiClima} altImg='Api de Clima' nameProject='Api Clima' descriProject='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at consectetur ea molestias ad reprehenderit odit veniam consequuntur. At eveniet quas officia nesciunt ipsam eos, quasi amet ullam quis consequatur.' linkPro='https://apiclima-three.vercel.app/'/>
        <CardsProject imgProject={gerador} altImg='Gerador de senhas' nameProject='Gerador de Senhas' descriProject='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at consectetur ea molestias ad reprehenderit odit veniam consequuntur. At eveniet quas officia nesciunt ipsam eos, quasi amet ullam quis consequatur.' linkPro='https://gerador-senhas-2qovjqoft-caiosantos00.vercel.app/'/>
        <CardsProject imgProject={quizImg} altImg='Quiz de Javascript' nameProject='Quiz Javascript' descriProject='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at consectetur ea molestias ad reprehenderit odit veniam consequuntur. At eveniet quas officia nesciunt ipsam eos, quasi amet ullam quis consequatur.' linkPro='https://quiz-javascript-mauve.vercel.app/'/>
        <CardsProject imgProject={cardapio} altImg='Cardápio de hamburgueria' nameProject='Cardápio' descriProject='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit at consectetur ea molestias ad reprehenderit odit veniam consequuntur. At eveniet quas officia nesciunt ipsam eos, quasi amet ullam quis consequatur.' linkPro='https://cardapio-hamburgueria.vercel.app/'/>
        <div id="divBreve"><span className="nameProject">Em breve novos projetos...</span></div>
      </div>
    )
  }
  
  