import styled from "styled-components"
import Arrow from "../../assets/arrow-white.svg"

const StyledAstronautaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 450px){
        
    }
`
const StyledDivTexto = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    h1{
        font-weight: 200;
    }
    p{
        color: #5A5757;
        font-weight: bold;
    }
    strong{
        font-weight: 200;
    }
    @media (max-width: 450px){
    }
`
const StyledDivImage = styled.div`
    @media (max-width: 450px){
        img{

            width: 250px;
            height: 150px;
        }
    }
`

export const Astronauta = (props) => {
    return(
        <StyledAstronautaContainer>
            <StyledDivTexto>
                <h1>{props.titulo}</h1>
                <img src={Arrow} alt="" />
            </StyledDivTexto>
            <StyledDivTexto>
                <p>{props.nome}</p>
                <strong>{props.dados}</strong>
            </StyledDivTexto>
            <StyledDivImage>
                <img src={props.image} alt="" />
            </StyledDivImage>
        </StyledAstronautaContainer>
    )
}