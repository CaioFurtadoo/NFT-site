import styled from "styled-components"

const StyledInputLabel = styled.label`
    height: 66px;
    display: flex;
    align-items: center;
    input{
        width: 240px;
        border: none;
        background-color: #0D0D0D;
        height: 100%;
        padding: 0 25px;
        color:white;
        font-size: 20px;
    }
    button{
        width:122px;
        height: 100%;
        background-color: white;
        border: none;
        font-size: 20px;
        font-weight: bold;
    }
`
export const InputText = (props) =>{
    return(
        <StyledInputLabel>
            <input 
            type="text" 
            placeholder={props.placeholder}
            />
            <button>
                Enviar
            </button>
        </StyledInputLabel>
    )
}