import styled from "styled-components"
import { NumerosDados } from "../NumerosDados"
import { TextoDados } from "../TextoDados"
import banner from "../../assets/banner.png"

const StyledContainerDados = styled.div`
    border-bottom: 1px solid #5A5757;
    height: 100vh;
    display: flex;
    @media (max-width: 1050px){
        img{
            display: none;
        }
    }
`

const StyledDivNumeros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 90px;
    border-right: 1px solid #5A5757;
    width: 40vh;
    height: 100%;
    @media (max-width: 1050px){
        width: 25vh;
    }
`

const StyledDivTextImage = styled.div`
    width: 100%;
    img{
        height: 45vh;
        width: 100%;
    }
`
const StyledDivText = styled.div`
    height: 55vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    @media (max-width: 1050px){
        height: 100%;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`

export const Dados = () =>{
    return(
        <StyledContainerDados>
            <StyledDivNumeros>
                <NumerosDados texto="10k+" subtexto="Artes" />
                <NumerosDados texto="200+" subtexto="Vendas"/>
                <NumerosDados texto="20" subtexto="Artistas"/>
            </StyledDivNumeros>
            <StyledDivTextImage>
                <StyledDivText>
                    <TextoDados/>
                    <TextoDados/>
                </StyledDivText>
                <img src={banner} alt="" />
            </StyledDivTextImage>
        </StyledContainerDados>
    )
}