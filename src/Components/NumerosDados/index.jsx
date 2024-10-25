import styled from "styled-components"

const StyledContainerDados = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    h1{
        font-size: 8vh;
    }
    p{
        color: var(--subtitle-color);
        font-weight: 500;
        font-size: 3.5vh;
    }
    @media (max-width: 1050px){
        h1{
            font-size: 6vh;
        }
        p{
            font-size: 2vh;
        }
    }
`

export const NumerosDados = (props) => {
    return(
        <StyledContainerDados>
            <h1>{props.texto}</h1>
            <p>{props.subtexto}</p>
        </StyledContainerDados>
    )
}