import styled from "styled-components"

const StyledContainerTextoDados = styled.div`
    max-width: 60vh;
    display: flex;
    flex-direction: column;
    gap: 60px;
    font-weight: 100;
    padding: 10px;
    font-size: 3vh;
    strong{
        color: var(--color-logo);
    }
    #pStrong{
        text-decoration: underline white;
    }
    @media (max-width: 1050px){
        font-size: 3.5;
        max-width: 90vh;
    }
    @media (max-width: 420px) {
        font-size: 2.5vh;
    }

`
export const TextoDados = () => {
    return (
        <StyledContainerTextoDados>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <strong>potenti diam</strong> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
            <p id="pStrong">Lorem ipsum</p>
        </StyledContainerTextoDados>
    )
}