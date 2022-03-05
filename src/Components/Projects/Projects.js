import { Project } from "./Project";
import styled from "styled-components";
import { projectsData } from "./projectsData";

export const Projects = () => {
  return (
    <Container>
      {projectsData.map((project) => {
        return <Project project={project} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;

  margin: auto;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;
