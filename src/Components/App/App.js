import { InfoBox } from "../InfoBox";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import { Projects } from "../Projects";
import { Source } from "../Source";
import ReactGA from "react-ga";

// const TRACKING_ID = "UA-192692463-1";
// ReactGA.initialize(TRACKING_ID);
// ReactGA.pageview(window.location.pathname + window.location.search);

export const App = () => {
  const TRACKING_ID = "UA-192692463-1";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname);

  return (
    <Container>
      Kutay
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
