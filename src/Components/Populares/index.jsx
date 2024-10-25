import styled from "styled-components"
import { Astronauta } from "../Astronauta"
import astronauta1 from "../../assets/astronauta-1.png"
import astronauta2 from "../../assets/astronauta-2.png"
import astronauta3 from "../../assets/astronauta-3.png"
import astronauta4 from "../../assets/astronauta-4.png"

const StyledPopularesContainer = styled.div`
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    #PopularTitle{
        font-size: 43px;
    }
    strong{
        color: var(--color-logo);
    }
    @media (max-width: 920px){
        align-items: center;
        text-align: center;
    }
`
const StyledAstronautasContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    @media (max-width: 920px){
        flex-direction: column;
        align-items: center;
        gap: 80px;
        text-align: center;
    }
`
const StyledAstronauta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`

const StyledDivLine = styled.div`
    border-left: 1px solid #5A5757;
    @media (max-width: 920px){
        display: none;
    }
`

export const Populares = () => {
    return(
        <StyledPopularesContainer>
             <h1 id="PopularTitle"><strong>Populares</strong> da semana</h1>
            <StyledAstronautasContainer>
                <StyledAstronauta>
                    <Astronauta image={astronauta1} titulo="Astronauta 1" nome="Caio Furtado" dados="5.25 RKT"/>
                    <Astronauta image={astronauta3} titulo="Astronauta 3" nome="Kaua Mateus" dados="3.75 RKT"/>
                </StyledAstronauta>
                <StyledDivLine></StyledDivLine>
                <StyledAstronauta>
                    <Astronauta image={astronauta2} titulo="Astronauta 2" nome="Victor Hugo" dados="2.0 RKT"/>
                    <Astronauta image={astronauta4} titulo="Astronauta 4" nome="Manoel" dados="4.30 RKT"/>
                </StyledAstronauta>
            </StyledAstronautasContainer>
        </StyledPopularesContainer>
    )
}