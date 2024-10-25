import styled from "styled-components"

const StyledContainerLista = styled.ul`
    li:nth-child(1){
        font-weight: bold;
        color: white;
    }
    font-weight: 200;
    color: #5A5757;
    display: flex;
    flex-direction: column;
    gap: 13px;
    list-style: none;
    font-size: 20px;
    @media (max-width: 400px){
        a{
            font-size:16px;
        }
    }
`

export const Lista = (props) =>{
    return(
        <StyledContainerLista>
            {props.array.map((text, index) => <li key={index}><a href={props.link}>{text}</a></li>)}
        </StyledContainerLista>
    )
}