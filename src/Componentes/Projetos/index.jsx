import CardsProject from "./CardsProjects"
import CardsTech from "./CardsTech"
import sAcessi from "../../assets/Projetos/siteAcessibilidade.png"
import apiClima from "../../assets/Projetos/apiClima.png"
import cardapio from "../../assets/Projetos/cardapio.png"
import gerador from "../../assets/Projetos/geradorPass.png"
import loja from "../../assets/Projetos/loja.png"
import lojaReact from "../../assets/Projetos/lojaReact.png"

import './Projetos.css'
export default function Projetos() {
    return (
      <div id="boxCardsProje">
        <div id="containerTechs">
      <h1 className="titles" id='titleTech'>Tecnologias</h1>
      <div id='divTechs'>
        <CardsTech nameTech={'HTML'}/>
        <CardsTech nameTech={'CSS'}/>
        <CardsTech nameTech={'Sass'}/>
        <CardsTech nameTech={'Javascript'}/>
        <CardsTech nameTech={'React Js'} />
        <CardsTech nameTech={'Git Hub'}/>
        <CardsTech nameTech={'Python'}/>
        <CardsTech nameTech={'PHP'}/>
        <CardsTech nameTech={'Laravel'}/>
      </div>
      </div>
      <CardsProject 
        imgProject={lojaReact} 
        altImg='E-commerce React' 
        nameProject='Loja virtual' 
        descriProject='
        O projeto do Sistema de carrinho visa enriquecer meu portfólio, utilizando as tecnologias listadas abaixo.
        '
        linkPro='https://front-end-ecommerce-seven.vercel.app/'
        techs={
        <>
        <CardsTech nameTech='HTML'/>
        <CardsTech nameTech='Sass'/>
        <CardsTech nameTech='React Js'/>
        </>
        }
        />
      <CardsProject 
        imgProject={loja} 
        altImg='E-commerce MYX' 
        nameProject='Loja virtual MYX' 
        descriProject='
        O projeto da loja Mynd Of Gangster está sendo desenvolvido de maneira colaborativa, contando com a ajuda de um Desenvolvedor Back-End. Vale ressaltar que o trabalho realizado está sendo devidamente remunerado, garantindo o reconhecimento e a valorização do profissional envolvido. '
        linkPro=''
        techs={
        <>
        <CardsTech nameTech='HTML'/>
        <CardsTech nameTech='CSS'/>
        <CardsTech nameTech='Sass'/>
        <CardsTech nameTech='Javascript'/>
        <CardsTech nameTech={'PHP'}/>
        <CardsTech nameTech={'Laravel'}/>
        </>
        }
        />
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
  
  