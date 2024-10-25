import styled from "styled-components";

const StyledImages = styled.div`
    border: 1px solid #5A5757;
    width: 20vw;
    @media(max-width: 1050px){
        width:30vh;
    }
`

export const Image = (props) => {
    return(
        <StyledImages>
            <img src={props.imagem} alt="" />
        </StyledImages>
    )
}