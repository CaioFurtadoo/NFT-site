import styled from "styled-components"
import background from "../../assets/background.png"
import wolf from "../../assets/logo_MetaMask.svg"
import group from "../../assets/group-avarts.png"
import badge from "../../assets/badge.svg"
import { Galeria } from "../Galeria"
import menu from "../../assets/menu-aberto.png"
import { useState } from "react"

const ContainerHeader = styled.header`
    background-image: url(${background});
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    padding-top: 57px;
    strong{
        color: var(--color-logo);
    }
    .openButton{
        display: none;
    }

    @media (max-width: 1050px){
        padding: 0 25px;
        padding-top: 50px;

        .header{
            align-items: start;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            .Menu{
            display: flex;
            }
            .headerMenu{
                width: 100%;
            }
        }
        nav{
            display:none;
            position: relative;
            flex-direction: column;
            justify-content: start;
        }
        nav.menuOpen{
            display: flex;
        }

        ul{
            flex-direction: column;
            align-items: center;
        }

        .openButton{
            display: flex;
        }

        .closeButton{
            display:none;
        }
    }
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 90px;
    ul{
        display: flex;
        gap: 60px;
        list-style: none;
    }
    li{
        font-size: 1.3rem;
        transition: 0.2s;
    }
    li:hover{
        transform: scale(1.1);
    }
    .Menu{
        display: none;
        width:64px;
        height:64px;
    }
    .headerMenu{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const CarteiraButton = styled.button`
    padding: 7px 12px;
    border: none;
    display: flex;
    flex-direction: row;
    gap: 15px;
    background-color: white;
    align-items: center;
    p{
        color: black;
        font-weight: bold;
        font-size: 18px;
    }
`

const StyledTextDiv = styled.div`
    display: flex;
    gap: 38px;
    align-items: center;
    margin-bottom: 100px;
    @media(max-width: 1050px){
        flex-wrap: wrap-reverse;
        justify-content: center;
        align-items: center;
        gap: 50px;
        max-width: 70%vw;
        text-align: center;
        p{
            font-size: 4vh;
        }
    }
`

const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 52px;
    div{
        position: relative;
        display: flex;
        gap: 10px
    }
    @media(max-width: 1050px){
        align-items: center;
    }
`

const StyledDiv2 = styled.div`
    display: flex;
    align-items: start;
    p{
        font-size: 47px;
        font-weight: bold;
    }
`

const StyledDiv3 = styled.div`
    img{
        width: 170px;
        height: 170px;
    }
    @media(max-width: 1050px){
        display: none;
    }
`

const DivPlusTen = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -40px;
    .negrito{
        font-weight: bold;
    }
    .normal{
        font-weight: 300;
        font-size: 16px;
    }
`

const StyledDivGeral = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const Header = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <ContainerHeader>
                <StyledDiv className="header">
                    <div className="headerMenu">
                        <h1>Rocket <strong>NFTs</strong></h1>
                        <img className="Menu" onClick={() => {
                            setMenuOpen(!menuOpen);
                        }} src={menu} alt="" />
                    </div>
                    <nav className={menuOpen ? "menuOpen" : ""}>
                        <ul className={menuOpen ? "menuOpen" : ""}>
                            <li>Comprar NFT</li>
                            <li>sobre</li>
                            <li>FAQ</li>
                            <li>
                                <CarteiraButton className="openButton">
                                    <img src={wolf} alt="" />
                                    <p>Conectar carteira</p>
                                </CarteiraButton>
                            </li>
                        </ul>
                    </nav>
                    <CarteiraButton className="closeButton">
                        <img src={wolf} alt="" />
                        <p>Conectar carteira</p>
                    </CarteiraButton>
                </StyledDiv>
                <StyledDivGeral>
                <StyledTextDiv>
                    <StyledDiv1>
                        <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). Compre, venda e descubra ativos digitais exclusivos para você.</p>
                        <div>
                            <img src={group} alt=""/>
                            <DivPlusTen>
                                <p className="negrito">+10</p>
                                <p className="normal">Artistas Selecionados</p>
                            </DivPlusTen>
                        </div>
                    </StyledDiv1>
                    <StyledDiv2>
                        <p>Descubra a verdadeira arte digital e colecione diversas <strong>NFTs</strong></p>
                    </StyledDiv2>
                    <StyledDiv3>
                        <img src={badge} alt="" />
                    </StyledDiv3>
                </StyledTextDiv>
                    <Galeria/>
                </StyledDivGeral>
        </ContainerHeader>
    )
}