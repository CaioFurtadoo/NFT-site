import { Perfil } from "../Perfil";
import Arrow from "../../assets/arrow-orange.svg"
import artista1 from "../../assets/artista-1.png"
import artista2 from "../../assets/artista-2.png"
import artista3 from "../../assets/artista-3.png"
import artista4 from "../../assets/artista-4.png"
import artista6 from "../../assets/artista-6.png"
import * as Styled from "./styles"

export const Artistas = () => {
    return(
        <Styled.ArtistasContainer>
            <h1>Melhores <strong>artistas</strong></h1>
            <Styled.GaleriaArtistas>
                <Perfil color="#252525" image={artista1} titulo="Caio" subtexto="80 Fotografias"/>
                <Perfil color="#FF5B50" image={artista2} titulo="Sofia" subtexto="55 Fotografias" colorText="#FFFFFF"/>
                <Perfil color="#252525" image={artista3} titulo="Lucas" subtexto="33 Fotografias"/>
                <Perfil color="#252525" image={artista4} titulo="Gabrielli" subtexto="40 Fotografias"/>
                <Perfil color="#252525" image={artista6} titulo="Celso" subtexto="95 Fotografias"/>
                <Perfil color="#252525" image={artista1} titulo="Rafael" subtexto="15 Fotografias"/>
            </Styled.GaleriaArtistas>
                <Styled.LastText>
                    <p>Ver todos os artistas</p>
                    <img src={Arrow} alt="" />
                </Styled.LastText>
        </Styled.ArtistasContainer>
    )
}