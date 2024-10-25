import styled from "styled-components";
import { Header } from "./Components/Header";
import { Dados } from "./Components/Dados";
import { Populares } from "./Components/Populares";
import { Artistas } from "./Components/Artistas";
import { Footer } from "./Components/Footer";

const StyledContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 124px 0;
`
function App() {
  return (
    <div>
      <Header />
      <Dados />
      <StyledContainerApp>
        <Populares/>
        <Artistas/>
      </StyledContainerApp>
      <Footer/>
    </div>
  )
}

export default App
