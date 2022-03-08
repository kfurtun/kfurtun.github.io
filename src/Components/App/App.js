import { InfoBox } from "../InfoBox";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { Projects } from "../Projects";
import { Source } from "../Source";

export const App = () => {
  return (
    <Container>
      <GlobalStyles />

      <Source />

      <InfoBox />
      <Projects />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

// const SourceDiv = styled.div`
//   width: 98vw;
//   display: flex;
//   justify-content: flex-end;
// `;
