import styled from "styled-components"

const StyledPerfilContainer = styled.div`
    background-color: ${props => props.$backgroundColor};
    width: 280px;
    height: 124px;
    display: flex;
    align-items: center;
`
const StyledPerfilImagem = styled.div`
    padding: 30px;
    img{
        width: 80px;
    }
`
const StyledPerfilText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 8px;
    p{
        font-size: 16px;
        strong{
            color: ${props => props.$textColor};
            font-weight: 300!important;
        }
    }
`
export const Perfil = (props) => {
    return(
        <StyledPerfilContainer $backgroundColor={props.color}>
            <StyledPerfilImagem>
                <img src={props.image} alt="" />
            </StyledPerfilImagem>
            <StyledPerfilText $textColor = {props.colorText}>
                <p>{props.titulo}</p>
                <p><strong>{props.subtexto}</strong></p>
            </StyledPerfilText>
        </StyledPerfilContainer>
    )
}