import styled from "styled-components";
import galeria1 from "../../assets/galeria-1.png"
import galeria2 from "../../assets/galeria-2.png"
import galeria3 from "../../assets/galeria-3.png"
import galeria4 from "../../assets/galeria-4.png"
import galeria5 from "../../assets/galeria-5.png"
import galeria6 from "../../assets/galeria-6.png"
import galeria7 from "../../assets/galeria-7.png"
import galeria8 from "../../assets/galeria-8.png"
import { Image } from "../Image";

const StyledGaleriaContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 54px;
`

const StyledGaleria = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    img{
        width: 20vw;
        height: 100%;
    }
    @media(max-width: 1050px){
        img{
            width:30vh;
            height:100%;
        }
    }

`

export const Galeria = () => {
    return(
        <StyledGaleriaContainer>
            <StyledGaleria>
                <Image imagem={galeria1}/>
                <Image imagem={galeria2}/>
                <Image imagem={galeria3}/>
                <Image imagem={galeria4}/>
            </StyledGaleria>
            <StyledGaleria>
                <Image imagem={galeria5}/>
                <Image imagem={galeria6}/>
                <Image imagem={galeria7}/>
                <Image imagem={galeria8}/>
            </StyledGaleria>
        </StyledGaleriaContainer>

    )
}