import { InfoBox } from "../InfoBox";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { Projects } from "../Projects";

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <InfoBox />
      <Projects />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;
