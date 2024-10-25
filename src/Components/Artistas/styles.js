import styled from "styled-components";

export const ArtistasContainer = styled.div`
    strong {
        color: var(--color-logo);
    }
    text-align: center;
    padding: 80px 80px;
    display: flex;
    flex-direction: column;
    gap: 55px;
    @media (max-width: 460px) {
        padding: 80px 0;
        h1 {
            font-size: 33px;
        }
    }
`;

export const GaleriaArtistas = styled.div`
    display: flex;
    gap: 100px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
`;

export const LastText = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 15px;
    p {
        font-size: 16px;
    }
    img {
        width: 13px;
    }
`;
