import styled from "styled-components"
import arrowBlack from "../../assets/arrow-black.svg"
import { InputText } from "../InputText"
import { Lista } from "../Lista"
import email from "../../assets/email.svg"
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import twitter from "../../assets/twitter.svg"


const StyledFooter = styled.footer`
    background-color: #252525;
        strong{
        color: var(--color-logo);
    }
`

const StyledTitleDivFooter = styled.div`
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 60px;
    border-bottom: 1px 0 2px 1px solid #5A5757;
    @media (max-width: 500px){
        padding: 0 30px;
        padding-top: 80px;
        padding-bottom: 60px;
    }
`

const StyledButtonFooter = styled.button`
    width: 80px;
    height: 80px;
    background-color: var(--color-logo);
    border: none;
`

const StyledDataDiv = styled.div`
    h1{
        font-weight: 200;
    }
    strong{
        font-weight: 200;
    }
    border-top: 1px solid #5A5757;
    border-bottom: 1px solid #5A5757;
    padding: 0 80px;
    display: flex;
    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`

const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 70px 0;
    border-right: 1px solid #5A5757;
    max-width: 500px;
    div{
        max-width: 400px;
    }
    @media (max-width: 1000px){
        justify-content: center;
        gap: 30px;
        max-width: 100%;
        border: 0;
        align-items: center;
        text-align: center;
        padding: 50px 0;
    }
    @media (max-width: 480px){
        input{
            max-width: 150px;
            padding: 0 10px;
        }
        button{
            max-width: 100px;
        }
    }
`

const StyledListDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%; 
    @media (max-width: 1000px){
        justify-content: center;
        gap: 50px;
        max-width: 100%;
        border: 0;
        align-items: center;
        text-align: center;
        padding-bottom: 50px;
    }
    @media (max-width: 400px){
        gap: 35px;
    }
`

const StyledFinalDivFooter = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0 80px;
    padding-top: 80px;
    padding-bottom: 60px;
    flex-wrap: wrap;
    h1{
        font-size: 20px;
        color: #5A5757;
        font-weight: 200;
    }
    nav{
        display: flex;
        list-style:none;
        gap: 50px;
    }
    @media (max-width: 710px){
        justify-content: center;
        gap: 25px;
        padding: 50px;
        nav{
            gap: 40px;
        }
    }
`
export const Footer = () => {

    const textList1 = ["Empresa","Sobre","Serviços","Time","Carreira"]
    const textList2 = ["Mapa","Galeria","Populares","Vendas","Contato"]
    const textList3 = ["Links","FAQs","Termos","Política","Ajuda"]


    return(
    <StyledFooter>
        <StyledTitleDivFooter>
            <h1>Rocket <strong>NFTs</strong></h1>
            <StyledButtonFooter>
                <img src={arrowBlack} alt="" />
            </StyledButtonFooter>
        </StyledTitleDivFooter>
        <StyledDataDiv>
            <StyledInputDiv>
                <div>
                    <h1>Fique por dentro de <strong>todas as novidades</strong></h1>
                </div>
                <InputText placeholder="Digite seu Email"/>
            </StyledInputDiv>
            <StyledListDiv>
                <Lista array={textList1}/>
                <Lista array={textList2}/>
                <Lista array={textList3}/>
            </StyledListDiv>
        </StyledDataDiv>
        <StyledFinalDivFooter>
            <h1>caio.f.m.carvalho@gmail.com</h1>
            <nav>
                <li><img src={instagram} alt="instagram icone" /></li>
                <li><img src={youtube} alt="youtube icone" /></li>
                <li><img src={twitter} alt="twitter icone" /></li>
                <li><img src={email} alt="email icone" /></li>
            </nav>
        </StyledFinalDivFooter>
    </StyledFooter>
    )
}